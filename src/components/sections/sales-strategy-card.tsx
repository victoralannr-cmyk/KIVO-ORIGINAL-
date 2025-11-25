'use client';

import React from 'react';

export default function SalesStrategyCard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <style jsx>{`
        .diagram-box {
          width: 260px;
          height: 300px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .center-cube {
          width: 80px;
          height: 80px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-cube 12s infinite linear;
        }
        .cube-face {
          position: absolute;
          width: 80px;
          height: 80px;
          background: #1A237E;
          border: 1px solid #4285F4;
          border-radius: 8px;
        }
        
        @keyframes rotate-cube {
          from { transform: rotateY(0deg) rotateX(10deg); }
          to { transform: rotateY(360deg) rotateX(10deg); }
        }

        .lines span {
          position: absolute;
          width: 80px;
          height: 2px;
          background: #4285F4;
          opacity: 0.7;
          transform-origin: left;
        }

        .lines span:nth-child(1) {
          top: 50%;
          left: 50%;
          transform: translateY(-50%) rotate(45deg) scaleX(0);
          animation: draw-line 2s 0.5s infinite ease-out;
        }

        .lines span:nth-child(2) {
          top: 50%;
          left: 50%;
          transform: translateY(-50%) rotate(-45deg) scaleX(0);
          animation: draw-line 2s 1s infinite ease-out;
        }

        .lines span:nth-child(3) {
          top: 50%;
          left: 50%;
          transform: translateY(-50%) rotate(135deg) scaleX(0);
           animation: draw-line 2s 1.5s infinite ease-out;
        }
        
        @keyframes draw-line {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(1); opacity: 0; }
        }
        
        .icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .icon-card {
          position: absolute;
          width: 40px;
          height: 40px;
          background-color: #0E1524;
          border: 1px solid #19233A;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          animation: float 6s infinite ease-in-out;
        }

        .icon-card:nth-child(1) {
          top: 20px;
          left: 30px;
          animation-delay: 0s;
        }
        .icon-card:nth-child(2) {
          top: 120px;
          right: 10px;
          animation-delay: 2s;
        }
        .icon-card:nth-child(3) {
          bottom: 30px;
          left: 50px;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

      `}</style>
       <div className="diagram-box">
          <div className="center-cube">
            <div className="cube-face"></div>
          </div>

          <div className="lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="icons">
            <div className="icon-card">
              📁
            </div>
            <div className="icon-card">
              📄
            </div>
            <div className="icon-card">
              👥
            </div>
          </div>
        </div>
    </div>
  );
}
