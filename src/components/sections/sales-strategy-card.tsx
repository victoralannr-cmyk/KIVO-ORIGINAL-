'use client';

import React from 'react';

export default function SalesStrategyCard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <style jsx>{`
        .diagram-box {
          width: 420px;
          height: 240px;
          background: #19233A;
          border-radius: 20px;
          padding: 30px;
          display: flex;
          align-items: center;
          position: relative;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .center-cube {
          width: 80px;
          height: 80px;
          background: #19233A;
          border: 3px solid #F8F9FB;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cube-face {
          width: 40px;
          height: 40px;
          border: 3px solid #F8F9FB;
          transform: rotate(45deg);
          border-radius: 6px;
        }

        .lines {
          position: absolute;
          left: 140px;
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .lines span {
          width: 120px;
          height: 2px;
          background: #F8F9FB;
          opacity: 0.8;
        }

        .icons {
          position: absolute;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .icon-card {
          width: 55px;
          height: 55px;
          background: #19233A;
          border: 3px solid #F8F9FB;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 26px;
          color: #F8F9FB;
          font-weight: bold;
          transition: 0.2s ease;
        }

        .icon-card:hover {
          background: #F8F9FB;
          color: #19233A;
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
            <div className="icon-card">📁</div>
            <div className="icon-card">📄</div>
            <div className="icon-card">👥</div>
          </div>
        </div>
    </div>
  );
}
