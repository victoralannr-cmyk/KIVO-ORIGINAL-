'use client';

import React from 'react';
import { Folder, FileText, Users } from 'lucide-react';

export default function SalesStrategyCard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <style jsx>{`
        .diagram-container {
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1.75 / 1;
        }

        .animated-svg {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .central-cube {
          animation: float 4s ease-in-out infinite;
        }
        
        .line-1, .line-2, .line-3 {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: draw-line 5s ease-in-out infinite;
        }

        .line-2 { animation-delay: 0.2s; }
        .line-3 { animation-delay: 0.4s; }

        .icon-box {
          animation: pulse-icon 4s ease-in-out infinite;
        }
        .icon-box-2 { animation-delay: 0.3s; }
        .icon-box-3 { animation-delay: 0.6s; }

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
        <svg className="animated-svg" viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="420" height="240" rx="20" fill="#19233A"/>
          
          <g className="central-cube" style={{ transformOrigin: 'center' }}>
            <rect x="50" y="85" width="70" height="70" rx="10" fill="none" stroke="#F8F9FB" strokeWidth="3"/>
          </g>

          <path className="line-1" d="M120 120 H 190 C 220 120, 240 77.5, 290 57.5" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="line-2" d="M120 120 H 290" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          <path className="line-3" d="M120 120 H 190 C 220 120, 240 162.5, 290 182.5" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
          
          <g className="icon-box icon-box-1" style={{ transformOrigin: 'center' }}>
            <rect x="290" y="30" width="55" height="55" rx="10" fill="#19233A" stroke="#F8F9FB" strokeWidth="2"/>
            <foreignObject x="302.5" y="42.5" width="30" height="30">
                <Folder color="#F8F9FB" strokeWidth="2" size={30} />
            </foreignObject>
          </g>
          
          <g className="icon-box icon-box-2" style={{ transformOrigin: 'center' }}>
            <rect x="290" y="92.5" width="55" height="55" rx="10" fill="#19233A" stroke="#F8F9FB" strokeWidth="2"/>
            <foreignObject x="302.5" y="105" width="30" height="30">
                <FileText color="#F8F9FB" strokeWidth="2" size={30} />
            </foreignObject>
          </g>

          <g className="icon-box icon-box-3" style={{ transformOrigin: 'center' }}>
            <rect x="290" y="155" width="55" height="55" rx="10" fill="#19233A" stroke="#F8F9FB" strokeWidth="2"/>
             <foreignObject x="302.5" y="167.5" width="30" height="30">
                <Users color="#F8F9FB" strokeWidth="2" size={30} />
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  );
}
