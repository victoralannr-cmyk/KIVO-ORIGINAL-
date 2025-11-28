'use client';

import React from 'react';
import { Folder, FileText, Users } from 'lucide-react';

export default function SalesStrategyCard() {
  return (
    <div className="w-full h-full flex items-center justify-center">
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

        .central-cube {
          animation: float 1.5s ease-in-out infinite;
        }
        
        .line-1, .line-2, .line-3 {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: draw-line 1.5s ease-in-out infinite;
        }

        .line-2 { animation-delay: 0.1s; }
        .line-3 { animation-delay: 0.2s; }

        .icon-box {
          animation: pulse-icon 1.5s ease-in-out infinite;
        }
        .icon-box-2 { animation-delay: 0.15s; }
        .icon-box-3 { animation-delay: 0.3s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes draw-line {
          0%, 20% { stroke-dashoffset: 180; }
          50% { stroke-dashoffset: 0; }
          80%, 100% { stroke-dashoffset: -180; }
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
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

          <path className="line-1" d="M120 95 H 170 C 200 95, 220 50, 270 30" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="line-2" d="M120 95 H 270" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="line-3" d="M120 95 H 170 C 200 95, 220 140, 270 160" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          
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
