'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientBackgroundProps {
  className?: string;
}

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  
  // Paleta de Cores baseada nos requisitos
  vec3 color1 = vec3(0.098, 0.137, 0.227); // #19233A
  vec3 color2 = vec3(0.682, 0.718, 0.804); // #AEB7CD (ajustado para melhor performance no shader)

  // Função de ruído 2D para movimento orgânico
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  // Value Noise para criar o padrão de nuvens suaves
  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Interpolação cúbica suave (smoothstep)
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Fractional Brownian Motion (fbm) para mais detalhes no ruído
  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  // Função para criar o gradiente de fundo inspirado no Framer
  vec3 createBackground(vec2 uv) {
    // Coordenadas normalizadas e centralizadas
    vec2 centeredUv = uv - 0.5;
    
    // Gradiente radial para criar um ponto de luz central
    float radialGradient = length(centeredUv) * 0.8;
    
    // Gradiente linear para a direção diagonal
    float linearGradient = dot(normalize(vec2(1.0, 1.0)), uv);
    
    // Combina os gradientes
    float mixedGradient = mix(radialGradient, linearGradient, 0.5);

    // Adiciona ruído sutil (fbm) para um efeito orgânico e animado
    vec2 noiseUv = uv * 3.0; // Escala do ruído
    noiseUv.x += iTime * 0.03; // Animação sutil no eixo X
    float noiseValue = fbm(noiseUv) * 0.5;
    
    // Mistura final do gradiente com o ruído
    float gradientMix = smoothstep(0.25, 0.75, mixedGradient + noiseValue);
    
    // Interpola as cores base
    return mix(color2, color1, gradientMix);
  }

  // Função para desenhar as linhas fluidas animadas
  vec3 createLines(vec2 uv) {
    vec3 finalColor = vec3(0.0);
    
    // Duas linhas para criar o efeito desejado
    for (int i = 0; i < 2; i++) {
      float t = float(i) * 0.5; // Fator de diferenciação para cada linha
      vec2 lineUv = uv;

      // Deformação senoidal para criar o movimento fluido e ondulante
      lineUv.x += sin(lineUv.y * 10.0 + iTime * 0.4 + t * 3.14) * 0.08;
      lineUv.y += cos(lineUv.x * 8.0 + iTime * 0.2 - t * 3.14) * 0.08;
      
      // Cria uma linha diagonal principal que se move
      float diagonal = lineUv.x + lineUv.y;
      float timeFactor = iTime * (0.15 + t * 0.05);
      
      // Cálculo da linha com brilho (glow)
      float line = 0.015 / abs(sin(diagonal * 4.0 - timeFactor));
      
      // Cor da linha, baseada na cor de realce
      vec3 lineColor = color2;
      line *= smoothstep(0.0, 0.6, line) * 0.7; // Brilho suave
      
      finalColor += line * lineColor;
    }
    
    return finalColor;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    
    // Cria o fundo e as linhas
    vec3 bgColor = createBackground(uv);
    vec3 lines = createLines(uv);
    
    // Mistura as camadas usando "screen" blend mode
    // (1.0 - (1.0 - A) * (1.0 - B))
    vec3 finalColor = 1.0 - (1.0 - bgColor) * (1.0 - lines);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: true });
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const createShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vertexShader);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fragmentShader);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, 1, 1, 1, -1, -1, 1, -1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionUniformLocation = gl.getUniformLocation(program, 'iResolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'iTime');

    let animationFrameId: number;
    let startTime = Date.now();

    const render = () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      
      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform1f(timeUniformLocation, currentTime);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
        // A lógica de redimensionamento já está no loop de render.
        // Apenas iniciamos o render loop.
    };
    
    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (gl.getExtension('WEBGL_lose_context')) {
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
      if (program) gl.deleteProgram(program);
      if (vertShader) gl.deleteShader(vertShader);
      if (fragShader) gl.deleteShader(fragShader);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return <canvas ref={canvasRef} className={cn("w-full h-full", className)} />;
};

export default AnimatedGradientBackground;
