'use client';

import React from 'react';
import { Settings, Mail, Video } from 'lucide-react';

export default function CreativeWorkflowCard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <style jsx>{`
        .workflow-diagram-container {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 400 / 190;
        }

        .animated-svg {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
        
        .box {
            animation: float-box 6s ease-in-out infinite;
        }
        .box-1 { animation-delay: 0s; }
        .box-2 { animation-delay: 0.2s; }
        .box-3 { animation-delay: 0.4s; }
        
        .connector-line {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: draw-line 6s ease-in-out infinite;
        }
        .line-1 { animation-delay: 0.5s; }
        .line-2 { animation-delay: 0.7s; }

        .icon, .text {
            animation: fade-in 6s ease-in-out infinite;
        }
        .icon-1, .text-1 { animation-delay: 1s; }
        .icon-2, .text-2 { animation-delay: 1.2s; }
        .icon-3, .text-3 { animation-delay: 1.4s; }

        @keyframes float-box {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes draw-line {
          0%, 20% { stroke-dashoffset: 50; }
          50% { stroke-dashoffset: 0; }
          80%, 100% { stroke-dashoffset: -50; }
        }

        @keyframes fade-in {
          0%, 30%, 100% { opacity: 0; }
          50%, 80% { opacity: 1; }
        }
      `}</style>
      <div className="workflow-diagram-container">
        <svg className="animated-svg" viewBox="0 0 400 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="190" rx="20" fill="#19233A"/>

          {/* Lines */}
          <path className="connector-line line-1" d="M200 64 V 94" stroke="#F8F9FB" strokeWidth="1.5" strokeOpacity="0.5"/>
          <path className="connector-line line-2" d="M200 126 V 156" stroke="#F8F9FB" strokeWidth="1.5" strokeOpacity="0.5"/>

          {/* Box 1: Planejamento */}
          <g className="box box-1" transform="translate(100, 0)">
            <rect x="50" y="25" width="150" height="40" rx="10" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
            <foreignObject x="65" y="35" width="20" height="20" className="icon icon-1">
                <Settings size={20} color="#888" />
            </foreignObject>
            <text x="95" y="50" fontFamily="Poppins, sans-serif" fontSize="14" fill="#F8F9FB" className="text text-1">Planejamento</text>
          </g>
          
          {/* Box 2: Roterização */}
          <g className="box box-2" transform="translate(100, 0)">
            <rect x="50" y="95" width="150" height="40" rx="10" stroke="#F8F9FB" strokeWidth="2" fill="none"/>
             <foreignObject x="65" y="105" width="20" height="20" className="icon icon-2">
                <Mail size={20} color="#888" />
            </foreignObject>
            <text x="95" y="120" fontFamily="Poppins, sans-serif" fontSize="14" fill="#F8F9FB" className="text text-2">Roteirização</text>
          </g>

          {/* Box 3: Produção */}
          <g className="box box-3" transform="translate(100, 0)">
            <rect x="50" y="155" width="150" height="40" rx="10" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none"/>
             <foreignObject x="65" y="165" width="20" height="20" className="icon icon-3">
                <Video size={20} color="hsl(var(--primary))" />
            </foreignObject>
            <text x="95" y="180" fontFamily="Poppins, sans-serif" fontSize="14" fill="#F8F9FB" className="text text-3">Produção</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
