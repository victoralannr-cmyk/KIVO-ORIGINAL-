'use client';

import React, { useEffect, useRef } from 'react';

const fragmentShaderSource = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform float animationSpeed;
uniform float pageOffset;    // deslocamento por aba
uniform vec2 mouseSmooth;    // posição do mouse suavizada
uniform float globalScale;   // controle global da escala de ondas

// palette (as cores pedidas)
const vec3 BG = vec3(0.0980392157, 0.1372549020, 0.2274509804); // #19233A
const vec3 LINE_BASE = vec3(0.6823529412,0.7176470588,0.7686274510); // #AEB7C4
const vec3 LINE_HL = vec3(0.9725490196,0.9764705882,0.9843137255); // #F8F9FB

// utility: rotate 2D
mat2 rot(float a){
  float s = sin(a), c = cos(a);
  return mat2(c,-s,s,c);
}

// logarithmic spiral rotation factor based on distance
float spiralRot(float radius, float strength){
  // add small offset to avoid singularities
  radius = max(radius, 0.0001);
  // log mapping to have slower change near center and faster at distance
  return strength * log(1.0 + radius*1.8);
}

// smooth linear interpolation
float sLerp(float a, float b, float t){
  return a + (b - a) * (3.0*t*t - 2.0*t*t*t);
}

// thin line band function
float lineBand(float x, float thickness){
  // x expected to be distance from center of band
  return smoothstep(thickness, 0.0, abs(x));
}

// 2D noise-lite (value noise)
float hash21(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// wave function
float wave(vec2 p, float phase, float freq, float amp){
  return sin(p.x * freq + phase) * amp;
}

void main(){
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  // normalize to center coordinates with aspect correction
  vec2 center = vec2(0.5, 0.5);
  vec2 pos = (uv - center) * vec2(iResolution.x / iResolution.y, 1.0);

  // global time (multiplied by speed)
  float t = iTime * animationSpeed + pageOffset;

  // compute mouse influence in normalized coords centered
  vec2 m = (mouseSmooth - 0.5) * vec2(iResolution.x / iResolution.y, 1.0);

  // base color
  vec3 col = BG;

  // Layers config: Top(0), Middle(1), Bottom(2)
  const int LAYERS = 3;
  // base parameters per layer (depth influences speed, amplitude, thickness)
  float depthArr[3];
  depthArr[0] = 0.18; // Top - shallow (closer to camera)
  depthArr[1] = 0.38; // Mid
  depthArr[2] = 0.75; // Bottom - deeper

  float speedArr[3];
  speedArr[0] = 1.05;
  speedArr[1] = 0.7;
  speedArr[2] = 0.45;

  float ampArr[3];
  ampArr[0] = 0.28;
  ampArr[1] = 0.18;
  ampArr[2] = 0.1;

  float thicknessArr[3];
  thicknessArr[0] = 0.012 * globalScale;
  thicknessArr[1] = 0.018 * globalScale;
  thicknessArr[2] = 0.028 * globalScale;

  // accumulate glow/lines
  float accum = 0.0;
  float accumHighlight = 0.0;
  float depthFactorTotal = 0.0;

  for(int i=0;i<LAYERS;i++){
    float depth = depthArr[i];
    float spd = speedArr[i];
    float amp  = ampArr[i];
    float thickness = thicknessArr[i];

    // per-layer phase: uses t and layer index
    float phase = t * spd * (1.0 + float(i)*0.08);

    // spiral rotation increasing with radius
    float r = length(pos);
    float rotAngle = spiralRot(r, 0.6 + float(i)*0.08);

    // apply spiral rotation based on radius (log-like)
    vec2 p = pos * rot(-rotAngle);

    // add pageOffset micro-phase and waviness
    float freq = 6.0 * (1.0 + float(i)*0.22) * (0.9 + globalScale*0.1);
    float w = wave(p, phase + pageOffset*0.6, freq, amp);

    // create band positions (several parallel streams per layer)
    // use a hashed offset so lines don't overlap perfectly across layers
    float baseOffset = float(i) * 0.25 + hash21(vec2(float(i)*12.345, t*0.13)) * 0.4;

    // decide number of lines per layer (kept small for clean look)
    int numLines = 5 - i; // top:4, mid:3, bottom:2
    float layerContribution = 0.0;
    float highlightContribution = 0.0;

    for(int li=0; li<numLines; li++){
      float lineIdx = float(li);
      // lateral offset for each parallel line
      float lateral = (lineIdx - float(numLines-1)/2.0) * 0.12 * (1.0 + float(i)*0.35);

      // compute distance to the band's centerline
      // we use p.y (vertical axis) plus the waviness & mouse bend influence
      float bend = 0.0;
      // radial bend influenced by mouse (smooth falloff)
      vec2 diffMouse = p - (m * (0.6 - depth*0.3));
      float distMouse = length(diffMouse);
      float bendStrength = 0.7 * smoothstep(0.8, 0.0, distMouse);
      bend += bendStrength * (0.26 / (1.0 + distMouse*3.0));

      // parallax shift per layer (opposite direction to mouse movement)
      vec2 parallax = -m * (0.12 * float(i) * globalScale);

      // compute the coordinate along which the band is measured
      float bandCoord = p.y + w*0.18 + lateral + bend + parallax.y;

      // compute distance of fragment from band center (use x for band spacing)
      float bandSpacing = 0.42 + float(i)*0.12;
      float bandPhase = mod(p.x + baseOffset + (lineIdx*0.13), bandSpacing) - bandSpacing*0.5;
      float dist = bandCoord - bandPhase;

      // thin band mask
      float mask = lineBand(dist, thickness * (1.0 + float(i)*0.6));

      // micro-highlight near center of band (gives subtle sheen)
      float centerMask = smoothstep(0.0, thickness*0.35, 1.0 - abs(dist/thickness));
      float highlight = mask * pow(centerMask, 2.2);

      // accumulate (weight by depth so nearer layers are stronger)
      float weight = 1.0 / (1.0 + depth*2.6) * (1.2 - float(i)*0.18);
      layerContribution += mask * weight;
      highlightContribution += highlight * weight*1.3;
      depthFactorTotal += weight;
    }

    accum += layerContribution * (1.0 - depth*0.35);
    accumHighlight += highlightContribution;
  }

  // normalize accumulators
  accum = accum / max(depthFactorTotal, 0.0001);
  accumHighlight = accumHighlight / max(depthFactorTotal, 0.0001);

  // color mixing: base lines use LINE_BASE, highlights blend toward LINE_HL
  vec3 linesColor = mix(LINE_BASE, LINE_HL, clamp(accumHighlight*1.6, 0.0, 1.0));

  // combine with background using subtle global vignette and glow
  // vignette
  float vign = smoothstep(1.15, 0.45, length(pos) * 1.05);
  // upward gradient to suggest ascent
  float upFactor = smoothstep(-0.6, 0.8, pos.y + 0.15); // pos.y negative = up
  float ascendBoost = mix(0.1, 0.28, upFactor);

  // final accumulation
  vec3 final = col;
  final = mix(final, linesColor, clamp(accum * (0.75 + ascendBoost), 0.0, 0.98));
  // add subtle highlight glow
  final += linesColor * accumHighlight * 0.12;

  // tone down near edges for polish
  final = mix(BG, final, vign);

  // clamp and output
  final = clamp(final, 0.0, 1.0);
  gl_FragColor = vec4(final, 1.0);
}
`;

const vertexShaderSource = `
    attribute vec2 position;
    void main(){
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: true, alpha: false });
    if (!gl) {
      console.error('WebGL não suportado no navegador.');
      return;
    }

    let animationFrameId: number;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      const w = Math.max(1, Math.floor(window.innerWidth * dpr));
      const h = Math.max(1, Math.floor(window.innerHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const createProgram = (gl: WebGLRenderingContext, vsSrc: string, fsSrc: string) => {
      const vs = createShader(gl, gl.VERTEX_SHADER, vsSrc);
      const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSrc);
      if (!vs || !fs) return null;
      const prog = gl.createProgram();
      if (!prog) return null;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(prog));
        gl.deleteProgram(prog);
        return null;
      }
      return prog;
    };

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    if (!program) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const verts = new Float32Array([-1, -1, 3, -1, -1, 3]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'iResolution');
    const uTime = gl.getUniformLocation(program, 'iTime');
    const uMouse = gl.getUniformLocation(program, 'iMouse');
    const uAnimationSpeed = gl.getUniformLocation(program, 'animationSpeed');
    const uPageOffset = gl.getUniformLocation(program, 'pageOffset');
    const uMouseSmooth = gl.getUniformLocation(program, 'mouseSmooth');
    const uGlobalScale = gl.getUniformLocation(program, 'globalScale');

    const animationSpeed = 0.9;
    const globalScale = 1.0;
    const LS_KEY = '__bg_shader_start';

    let globalStart = 0;
    try {
        globalStart = parseFloat(localStorage.getItem(LS_KEY) || '0');
        if (!globalStart || isNaN(globalStart) || globalStart <= 0) {
            globalStart = Date.now() / 1000.0;
            localStorage.setItem(LS_KEY, String(globalStart));
        }
    } catch (e) {
        globalStart = Date.now() / 1000.0;
        console.warn("localStorage not available for background animation persistence.");
    }
    

    function pageOffsetFromPath() {
      const p = window.location.pathname || '/';
      let h = 0;
      for (let i = 0; i < p.length; i++) {
        h = (h * 31 + p.charCodeAt(i)) | 0;
      }
      return ((h % 1000) / 1000.0) * 2.0 - 1.0;
    }
    const pageOffset = pageOffsetFromPath() * 0.9;

    let mouse = { x: 0.5, y: 0.5 };
    let mouseTarget = { x: 0.5, y: 0.5 };
    const lerpFactor = 0.12;

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseTarget.x = Math.min(1.0, Math.max(0.0, x));
      mouseTarget.y = Math.min(1.0, Math.max(0.0, y));
    };

    let lastTime = Date.now() / 1000;
    function updateMouse(dt: number) {
      mouse.x += (mouseTarget.x - mouse.x) * (1.0 - Math.pow(1.0 - lerpFactor, dt * 60.0));
      mouse.y += (mouseTarget.y - mouse.y) * (1.0 - Math.pow(1.0 - lerpFactor, dt * 60.0));
    }

    function render() {
      resizeCanvas();
      const now = Date.now() / 1000.0;
      const iTime = now - globalStart;

      const dt = Math.min(0.05, now - lastTime);
      updateMouse(dt);
      lastTime = now;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, iTime);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uAnimationSpeed, animationSpeed);
      gl.uniform1f(uPageOffset, pageOffset * 3.0);
      gl.uniform2f(uMouseSmooth, mouse.x, mouse.y);
      gl.uniform1f(uGlobalScale, globalScale);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      animationFrameId = requestAnimationFrame(render);
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    resizeCanvas();
    render();
    
    console.info('Background shader running — full-screen. Page offset:', pageOffset.toFixed(3));

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}

    