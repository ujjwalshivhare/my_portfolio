import React, { useEffect, useRef } from 'react';

interface Trail {
  x: number;
  y: number;
  opacity: number;
  id: number;
}

const MouseTrail: React.FC = () => {
  const trailRef = useRef<Trail[]>([]);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        id: Date.now()
      });

      // Create shooting star effect
      const star = document.createElement('div');
      star.className = 'fixed pointer-events-none w-2 h-2 bg-cyan-400 rounded-full blur-sm';
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      star.style.transform = 'translate(-50%, -50%)';
      star.style.animation = 'shooting-star 0.8s ease-out forwards';
      star.style.zIndex = '9999';
      
      document.body.appendChild(star);
      
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 800);
    };

    const animate = () => {
      // Update trail
      trailRef.current = trailRef.current
        .map(point => ({
          ...point,
          opacity: point.opacity - 0.05
        }))
        .filter(point => point.opacity > 0);

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes shooting-star {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-50">
        {trailRef.current.map(point => (
          <div
            key={point.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-sm"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              opacity: point.opacity,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MouseTrail;