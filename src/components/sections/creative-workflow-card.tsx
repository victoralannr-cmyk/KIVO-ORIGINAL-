
'use client';

import React from 'react';
import { Settings, Mail, Video } from 'lucide-react';

export default function CreativeWorkflowCard() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <style jsx>{`
        .workflow-diagram-container {
          width: 100%;
          height: 100%;
        }

        .animated-svg {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
        
        .box {
            animation: float-box 3s ease-in-out infinite;
        }
        .box-1 { animation-delay: 0s; }
        .box-2 { animation-delay: 0.1s; }
        .box-3 { animation-delay: 0.2s; }
        
        .connector-line {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: draw-line 3s ease-in-out infinite;
        }
        .line-1 { animation-delay: 0.25s; }
        .line-2 { animation-delay: 0.35s; }

        .icon, .text {
            animation: fade-in 3s ease-in-out infinite;
        }
        .icon-1, .text-1 { animation-delay: 0.5s; }
        .icon-2, .text-2 { animation-delay: 0.6s; }
        .icon-3, .text-3 { animation-delay: 0.7s; }

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
        <svg className="animated-svg" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" rx="20" fill="#19233A"/>

          {/* Lines */}
          <path className="connector-line line-1" d="M200 70 V 100" stroke="#F8F9FB" strokeWidth="1.5" strokeOpacity="0.5"/>
          <path className="connector-line line-2" d="M200 140 V 170" stroke="#F8F9FB" strokeWidth="1.5" strokeOpacity="0.5"/>

          {/* Box 1: Planejamento */}
          <g className="box box-1">
            <rect x="125" y="30" width="150" height="40" rx="10" stroke="#F8F9FB" strokeWidth="2" fill="hsl(var(--card))"/>
            <foreignObject x="135" y="40" width="20" height="20" className="icon icon-1">
                <Settings size={20} color="#888" />
            </foreignObject>
            <text x="165" y="55" fontFamily="Poppins, sans-serif" fontSize="14" fill="#F8F9FB" className="text text-1">Planejamento</text>
          </g>
          
          {/* Box 2: Roterização */}
          <g className="box box-2">
            <rect x="125" y="100" width="150" height="40" rx="10" stroke="#F8F9FB" strokeWidth="2" fill="hsl(var(--card))"/>
             <foreignObject x="135" y="110" width="20" height="20" className="icon icon-2">
                <Mail size={20} color="#888" />
            </foreignObject>
            <text x="165" y="125" fontFamily="Poppins, sans-serif" fontSize="14" fill="#F8F9FB" className="text text-2">Roteirização</text>
          </g>

          {/* Box 3: Produção */}
          <g className="box box-3">
            <rect x="125" y="170" width="150" height="40" rx="10" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="hsl(var(--card))"/>
             <foreignObject x="135" y="180" width="20" height="20" className="icon icon-3">
                <Video size={20} color="hsl(var(--primary))" />
            </foreignObject>
            <text x="165" y="195" fontFamily="Poppins, sans-serif" fontSize="14" fill="#F8F9FB" className="text text-3">Produção</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
