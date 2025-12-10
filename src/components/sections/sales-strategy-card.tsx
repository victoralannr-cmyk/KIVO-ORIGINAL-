'use client';

import React from 'react';
import { Folder, FileText, Users } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function SalesStrategyCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="w-full h-full flex items-center justify-center" ref={ref}>
      <div className={cn("diagram-container w-full h-full", isInView ? "is-in-view" : "")}>
        <svg className="animated-svg w-full h-full rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.25)]" viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="190" rx="20" fill="#0f1724"/>
          
          <g className="central-cube opacity-0" style={{ transformOrigin: 'center', animation: isInView ? 'fade-in-float 1s ease-out 0.2s forwards' : 'none' }}>
            <circle cx="70" cy="95" r="50" fill="none" stroke="#F8F9FB" strokeWidth="2.5"/>
            <g transform="translate(70, 95) scale(0.6)">
                <path d="M0 -30 L26 -15 V15 L0 30 L-26 15 V-15 Z M0 -30 L0 0 M-26 -15 L0 0 M26 -15 L0 0" stroke="#F8F9FB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0 30 L0 0" stroke="#F8F9FB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </g>

          <path className="animate-draw-line-infinite" style={{animationDelay: '0.5s'}} d="M120 95 C 170 95, 220 50, 270 30" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="animate-draw-line-infinite" style={{animationDelay: '0.6s'}} d="M120 95 H 270" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="animate-draw-line-infinite" style={{animationDelay: '0.7s'}} d="M120 95 C 170 95, 220 140, 270 160" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          
          <g className="icon-box opacity-0" style={{ transformOrigin: 'center', animation: isInView ? 'fade-in-float 1s ease-out 0.8s forwards' : 'none' }}>
            <rect x="270" y="5" width="50" height="50" rx="10" fill="#0f1724" stroke="#F8F9FB" strokeWidth="2"/>
            <foreignObject x="282.5" y="17.5" width="25" height="25">
                <Folder color="#F8F9FB" strokeWidth="2" size={25} />
            </foreignObject>
          </g>
          
          <g className="icon-box opacity-0" style={{ transformOrigin: 'center', animation: isInView ? 'fade-in-float 1s ease-out 0.9s forwards' : 'none' }}>
            <rect x="270" y="70" width="50" height="50" rx="10" fill="#0f1724" stroke="#F8F9FB" strokeWidth="2"/>
            <foreignObject x="282.5" y="82.5" width="25" height="25">
                <FileText color="#F8F9FB" strokeWidth="2" size={25} />
            </foreignObject>
          </g>

          <g className="icon-box opacity-0" style={{ transformOrigin: 'center', animation: isInView ? 'fade-in-float 1s ease-out 1s forwards' : 'none' }}>
            <rect x="270" y="135" width="50" height="50" rx="10" fill="#0f1724" stroke="#F8F9FB" strokeWidth="2"/>
             <foreignObject x="282.5" y="147.5" width="25" height="25">
                <Users color="#F8F9FB" strokeWidth="2" size={25} />
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  );
}
