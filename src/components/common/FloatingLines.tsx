'use client';
import React, { useRef, useEffect } from 'react';

const FloatingLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Line {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      lineWidth: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.len = Math.random() * 200 + 100;
        this.speed = Math.random() * 0.5 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.lineWidth = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < -this.len || this.x > width + this.len || this.y < -this.len || this.y > height + this.len) {
          // Reset when out of bounds
          const side = Math.floor(Math.random() * 4);
          switch(side) {
            case 0: // top
              this.x = Math.random() * width;
              this.y = -this.len;
              break;
            case 1: // right
              this.x = width + this.len;
              this.y = Math.random() * height;
              break;
            case 2: // bottom
              this.x = Math.random() * width;
              this.y = height + this.len;
              break;
            case 3: // left
              this.x = -this.len;
              this.y = Math.random() * height;
              break;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.lineWidth = this.lineWidth;
        
        const glowColor = '#AEB7C4';
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 10;
        
        const gradient = ctx.createLinearGradient(0, 0, this.len, 0);
        gradient.addColorStop(0, 'rgba(174, 183, 196, 0)');
        gradient.addColorStop(0.5, 'rgba(174, 183, 196, 0.4)');
        gradient.addColorStop(1, 'rgba(174, 183, 196, 0)');
        ctx.strokeStyle = gradient;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.len * Math.cos(this.angle + Math.PI), this.y + this.len * Math.sin(this.angle + Math.PI));
        ctx.stroke();
        ctx.restore();
      }
    }

    const lines = Array.from({ length: 30 }, () => new Line());

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      lines.forEach(line => {
        line.update();
        line.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default FloatingLines;
