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
      <style jsx>{`
        .diagram-container {
          width: 100%;
          height: 100%;
        }

        .animated-svg {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .central-cube, .icon-box {
          opacity: 0;
          animation: ${isInView ? 'fade-in-float 1s ease-out forwards' : 'none'};
        }
        
        .line {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: ${isInView ? 'draw-line 3s ease-in-out infinite' : 'none'};
        }

        .central-cube { animation-delay: 0.2s; }
        .line { animation-delay: 0.5s; }

        .icon-box-1 { animation-delay: 0.8s; }
        .icon-box-2 { animation-delay: 0.9s; }
        .icon-box-3 { animation-delay: 1s; }

        @keyframes fade-in-float {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes draw-line {
          0%, 20% {
            stroke-dashoffset: 180;
            opacity: 0;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          80%, 100% {
            stroke-dashoffset: -180;
            opacity: 0;
          }
        }
      `}</style>
       <div className="diagram-container">
        <svg className="animated-svg" viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="190" rx="20" fill="#0f1724"/>
          
          <g className="central-cube" style={{ transformOrigin: 'center' }}>
            <circle cx="70" cy="95" r="50" fill="none" stroke="#F8F9FB" strokeWidth="2.5"/>
            <g transform="translate(70, 95) scale(0.6)">
                <path d="M0 -30 L26 -15 V15 L0 30 L-26 15 V-15 Z M0 -30 L0 0 M-26 -15 L0 0 M26 -15 L0 0" stroke="#F8F9FB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0 30 L0 0" stroke="#F8F9FB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </g>

          {/* Branching lines */}
          <path className="line line-1" d="M120 95 C 170 95, 220 50, 270 30" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="line line-2" d="M120 95 H 270" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="line line-3" d="M120 95 C 170 95, 220 140, 270 160" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          
          <g className="icon-box icon-box-1" style={{ transformOrigin: 'center' }}>
            <rect x="270" y="5" width="50" height="50" rx="10" fill="#0f1724" stroke="#F8F9FB" strokeWidth="2"/>
            <foreignObject x="282.5" y="17.5" width="25" height="25">
                <Folder color="#F8F9FB" strokeWidth="2" size={25} />
            </foreignObject>
          </g>
          
          <g className="icon-box icon-box-2" style={{ transformOrigin: 'center' }}>
            <rect x="270" y="70" width="50" height="50" rx="10" fill="#0f1724" stroke="#F8F9FB" strokeWidth="2"/>
            <foreignObject x="282.5" y="82.5" width="25" height="25">
                <FileText color="#F8F9FB" strokeWidth="2" size={25} />
            </foreignObject>
          </g>

          <g className="icon-box icon-box-3" style={{ transformOrigin: 'center' }}>
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
