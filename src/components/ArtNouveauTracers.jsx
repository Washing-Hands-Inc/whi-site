import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const generateNouveauPath = () => {
  const points = Math.floor(Math.random() * 3) + 2;
  let d = `M 0 0 `;
  let currentX = 0;
  let currentY = 0;
  for (let i = 0; i < points; i++) {
    const cp1x = currentX + (Math.random() * 400 - 200);
    const cp1y = currentY + (Math.random() * 400 - 200);
    const cp2x = currentX + (Math.random() * 400 - 200);
    const cp2y = currentY + (Math.random() * 400 - 200);
    currentX += (Math.random() * 300 - 150);
    currentY += (Math.random() * 300 - 150);
    d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${currentX} ${currentY} `;
  }
  return d;
};

const generateMycelialPath = () => {
  const points = Math.floor(Math.random() * 4) + 3;
  let d = `M 0 0 `;
  let currentX = 0;
  let currentY = 0;
  for (let i = 0; i < points; i++) {
    const cpX = currentX + (Math.random() * 150 - 75);
    const cpY = currentY + (Math.random() * 150 - 75);
    currentX += (Math.random() * 100 - 50);
    currentY += (Math.random() * 100 - 50);
    d += `Q ${cpX} ${cpY} ${currentX} ${currentY} `;
  }
  // Add a branching path occasionally
  if (Math.random() > 0.3) {
    const branchStartX = currentX * 0.5;
    const branchStartY = currentY * 0.5;
    d += `M ${branchStartX} ${branchStartY} Q ${branchStartX + (Math.random() * 100 - 50)} ${branchStartY + (Math.random() * 100 - 50)} ${branchStartX + (Math.random() * 150 - 75)} ${branchStartY + (Math.random() * 150 - 75)} `;
  }
  return d;
};

export default function ArtNouveauTracers() {
  const location = useLocation();
  const isLichen = location.pathname.includes('/lichen');
  
  const [tracers, setTracers] = useState([]);

  useEffect(() => {
    const spawnTracer = () => {
      if (isLichen || location.pathname.includes('concepts')) {
        // Tracers disabled on these pages
        return;
      } else {
        // Standard Art Nouveau: single elegant line
        const id = Date.now() + Math.random();
        const isGold = Math.random() > 0.5;
        const color = isGold ? 'var(--color-gold)' : 'var(--color-drab-green)';
        const x = (Math.random() * 0.8 + 0.1) * window.innerWidth;
        const y = (Math.random() * 0.8 + 0.1) * window.innerHeight;
        const scale = Math.random() * 1.5 + 0.5;
        const rotation = Math.random() * 360;
        const path = generateNouveauPath();
        
        const newTracer = { id, x, y, scale, rotation, color, path };
        setTracers(prev => [...prev, newTracer]);
        
        setTimeout(() => {
          setTracers(prev => prev.filter(t => t.id !== id));
        }, 8000);
      }
    };

    // Initial spawns so the user sees it immediately
    spawnTracer();
    setTimeout(spawnTracer, 1000);

    const interval = setInterval(spawnTracer, 2500);
    return () => clearInterval(interval);
  }, [isLichen]);

  return (
    <div className="art-nouveau-container" style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      pointerEvents: 'none', zIndex: 0, overflow: 'hidden'
    }}>
      {tracers.map(tracer => (
        <svg 
          key={tracer.id}
          className="art-nouveau-tracer"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100vw', 
            height: '100vh',
            opacity: 0,
            animation: 'tracer-fade 8s ease-in-out forwards'
          }}
        >
          <g transform={`translate(${tracer.x}, ${tracer.y}) scale(${tracer.scale}) rotate(${tracer.rotation})`}>
            <path 
              d={tracer.path} 
              fill="none" 
              stroke={tracer.color} 
              strokeWidth={isLichen ? "2" : "4"} 
              strokeLinecap="round"
              pathLength="1"
              style={{
                strokeDasharray: "1",
                strokeDashoffset: "1",
                animation: 'tracer-draw 4s cubic-bezier(0.25, 1, 0.5, 1) forwards',
                filter: `drop-shadow(0 0 12px ${tracer.color})`
              }}
            />
          </g>
        </svg>
      ))}
    </div>
  );
}
