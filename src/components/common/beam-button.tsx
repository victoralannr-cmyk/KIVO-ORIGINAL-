'use client';

import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";

interface BeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  beamColor?: string;
  beamSize?: number;
  beamDuration?: number;
}

export const BeamButton = ({
  children,
  className,
  beamColor = "hsl(var(--primary))",
  beamSize = 300,
  beamDuration = 4,
  ...props
}: BeamButtonProps) => {
  const containerRef = useRef<HTMLButtonElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      if (beamRef.current) {
        beamRef.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`;
      }
    };
    
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <button
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-in-out group",
        "bg-primary hover:shadow-lg hover:shadow-primary/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <div
        ref={beamRef}
        className="pointer-events-none absolute left-0 top-0 z-0 h-px w-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={
          {
            "--beam-color": beamColor,
            "--beam-size": `${beamSize}px`,
            "--beam-duration": `${beamDuration}s`,
            transform: "translate(-50%, -50%)",
          } as React.CSSProperties
        }
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};
