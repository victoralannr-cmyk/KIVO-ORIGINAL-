'use client';

export default function AnimatedGradientBackground() {
  return (
    <div id="lines">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="line1"
          d="M -20 50% Q 20% 45%, 50% 50%"
        />
        <path
          className="line2"
          d="M 120% 50% Q 80% 55%, 50% 50%"
        />
      </svg>
    </div>
  );
}
