'use client';

import React, { useEffect, useRef } from 'react';

const codeSamples = [
  `/* Reset & Grid */
:root{
  --accent: #19233A;
  --bg: #0E1524;
}

/* Layout */
body{
  margin:0;
  min-height:100vh;
  background:var(--bg);
  display:flex;
  align-items:center;
  justify-content:center;
}

/* Header */
.header{
  width:100%;
  padding:28px 32px;
  backdrop-filter: blur(6px);
  display:flex;
  gap:18px;
  align-items:center;
}

/* Hero gradient */
.hero{
  height:520px;
  display:grid;
  place-items:center;
  background:linear-gradient(180deg, rgba(25,35,58,0.6), rgba(14,21,36,0.8));
  position:relative;
}
`,
];

export default function CodeTypingAnimation() {
  const codeElRef = useRef<HTMLPreElement>(null);
  const gutterElRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    const codeEl = codeElRef.current;
    const gutterEl = gutterElRef.current;
    let sampleIndex = 0;

    if (!codeEl || !gutterEl) return;

    function esc(s: string) {
      return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function makeGutter(lines: number) {
      if (!gutterEl) return;
      let out = '';
      for (let i = 1; i <= lines; i++) out += i + '\n';
      gutterEl.textContent = out;
    }

    function highlightChunk(chunk: string) {
      return chunk
        .replace(/(\/\*[^]*?\*\/)/g, '<span class="tok-comment">$1</span>')
        .replace(/(:)(\s*)(#[0-9a-fA-F]+)/g, '$1$2<span class="tok-value">$3</span>')
        .replace(/([a-zA-Z-]+)(\s*:\s*)/g, '<span class="tok-property">$1</span>$2')
        .replace(/({|}|\\(|\\)|;)/g, '<span class="tok-punct">$1</span>')
        .replace(/(^|\n)([^\\n:{};]+)/g, (m, p1, p2) => p1 + '<span class="tok-selector">' + p2.trim() + '</span>');
    }

    async function typeSample(text: string, opts = { speed: 18, pauseEnd: 1200 }) {
      if (!isMountedRef.current) return;
      codeEl.innerHTML = '';
      makeGutter(text.split('\n').length);
      const chars = text.split('');
      let visible = '';
      for (let i = 0; i < chars.length; i++) {
        if (!isMountedRef.current) return;
        visible += chars[i];
        codeEl.innerHTML = highlightChunk(esc(visible)) + '<span class="caret"></span>';
        await new Promise(r => setTimeout(r, opts.speed + Math.random() * 8));
      }
      if (!isMountedRef.current) return;
      await new Promise(r => setTimeout(r, opts.pauseEnd));
    }

    async function runLoop() {
        while (isMountedRef.current) {
            const txt = codeSamples[sampleIndex % codeSamples.length];
            await typeSample(txt, { speed: 14, pauseEnd: 1600 });
            
            if (!isMountedRef.current) break;

            for (let i = 0; i < Math.min(60, txt.length); i++) {
                if (!isMountedRef.current) break;
                const newText = txt.slice(0, txt.length - Math.floor((i / 60) * txt.length));
                codeEl.innerHTML = highlightChunk(esc(newText)) + '<span class="caret"></span>';
                await new Promise(r => setTimeout(r, 6));
            }
            sampleIndex++;
        }
    }
    
    makeGutter(20);
    runLoop();
    
    return () => {
      isMountedRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="code-animation-container h-full w-full">
      <style jsx>{`
        .code-animation-container {
          --bg: #0f1724; /* panel color */
          --accent: #19233A;
          --mono: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
          background: var(--bg);
          font-family: var(--mono);
          -webkit-font-smoothing: antialiased;
          width: 100%;
          height: 100%;
        }
        .editor {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02));
          box-shadow: 0 10px 40px rgba(3,6,12,0.6);
          padding: 20px;
          position: relative;
          z-index: 2;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
        }
        .editor-top {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 14px;
          flex-shrink: 0;
        }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .dot.red { background: #ff5f56; box-shadow: 0 0 6px rgba(255,95,86,0.15); }
        .dot.yellow { background: #ffbd2e; box-shadow: 0 0 6px rgba(255,189,46,0.12); }
        .dot.green { background: #28c93f; box-shadow: 0 0 6px rgba(40,201,63,0.12); }
        .code-wrap { display: flex; gap: 16px; align-items: flex-start; flex-grow: 1; overflow: hidden; }
        .gutter {
          width: 38px;
          color: #8b97a6;
          font-size: 11px;
          text-align: right;
          padding-right: 12px;
          user-select: none;
          opacity: 0.9;
          margin-top: 6px;
          flex-shrink: 0;
        }
        pre.code {
          margin: 0;
          font-size: 12px;
          line-height: 1.4;
          white-space: pre-wrap;
          word-break: break-word;
          color: #e6eef8;
          background: transparent;
          padding: 6px 12px;
          overflow: auto;
          height: 100%;
          flex-grow: 1;
        }
        pre.code :global(.tok-selector) { color: #7dd3fc; }
        pre.code :global(.tok-property) { color: #ffd78a; }
        pre.code :global(.tok-value) { color: #a5f3fc; }
        pre.code :global(.tok-comment) { color: #7c8191; font-style: italic; }
        pre.code :global(.tok-punct) { color: #e6eef8; }
        pre.code :global(.caret) {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: linear-gradient(90deg, #e6eef8, #e6eef8);
          margin-left: 2px;
          vertical-align: bottom;
          animation: blink 1s steps(2, start) infinite;
          transform-origin: center;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .editor::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02), inset 0 -40px 80px rgba(25,35,58,0.06);
        }
        @media (max-width: 720px) {
          .editor { padding: 14px; }
          .gutter { display: none; }
        }
      `}</style>
      <div className="editor" role="region" aria-label="Preview do clip de código">
        <div className="editor-top">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="code-wrap">
          <div className="gutter" ref={gutterElRef}></div>
          <pre className="code" ref={codeElRef} aria-live="polite"></pre>
        </div>
      </div>
    </div>
  );
}
