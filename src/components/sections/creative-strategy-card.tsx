'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CreativeStrategyCard() {
  return (
    <div className="creative-strategy-card-container w-full h-full flex items-center justify-center">
      <style jsx>{`
        .creative-strategy-card-container {
          perspective: 1000px;
        }
        .clip-box {
          width: 250px;
          height: 150px;
          border-radius: 12px;
          background-color: #1a237e;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          animation: rotate-card 10s infinite linear;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .circle {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #4285f4;
          animation: move-circle 8s infinite ease-in-out;
        }
        .content {
          z-index: 1;
          color: white;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        .content .line {
          margin: 4px 0;
          font-size: 1rem;
          opacity: 0;
          animation: fade-in-text 8s infinite ease-in-out;
        }
        .content .line:nth-child(1) { animation-delay: 0s; }
        .content .line:nth-child(2) { animation-delay: 2.6s; }
        .content .line:nth-child(3) { animation-delay: 5.2s; }

        @keyframes rotate-card {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(10deg) rotateX(5deg); }
          50% { transform: rotateY(0deg) rotateX(0deg); }
          75% { transform: rotateY(-10deg) rotateX(-5deg); }
          100% { transform: rotateY(0deg) rotateX(0deg); }
        }

        @keyframes move-circle {
          0% { transform: translate(-80px, -80px) scale(0.8); }
          25% { transform: translate(80px, -40px) scale(1); }
          50% { transform: translate(40px, 80px) scale(0.9); }
          75% { transform: translate(-80px, 40px) scale(1.1); }
          100% { transform: translate(-80px, -80px) scale(0.8); }
        }
        
        @keyframes fade-in-text {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          15%, 45% { opacity: 1; transform: translateY(0); }
          60% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
      <div className="clip-box">
        <div className="circle"></div>
        <div className="content">
          <p className="line">Estratégia Criativa</p>
          <p className="line">Desenvolvimento Visual</p>
          <p className="line">Entrega Final</p>
        </div>
      </div>
    </div>
  );
}
