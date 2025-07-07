import React, { useEffect, useState } from 'react';
import { Infinity } from 'lucide-react';

const UFO: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animate = () => {
      const time = Date.now() * 0.001;
      const x = Math.sin(time * 0.3) * 300 + window.innerWidth / 2;
      const y = Math.cos(time * 0.2) * 200 + window.innerHeight / 2;
      
      setPosition({ x, y });
      setRotation(time * 20);
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-30 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* UFO Body */}
      <div className="relative">
        {/* Main UFO Structure */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 relative overflow-hidden shadow-2xl">
          {/* UFO Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-cyan-400/30 blur-sm animate-pulse"></div>
          
          {/* UFO Dome */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-cyan-200/50 to-transparent rounded-full"></div>
          
          {/* UFO Base */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-b-full"></div>
          
          {/* UFO Lights */}
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Infinity Symbol on UFO */}
        <div 
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-cyan-400 drop-shadow-lg"
          style={{
            transform: `translateX(-50%) rotate(${rotation}deg)`,
            filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.7))'
          }}
        >
          <Infinity size={32} />
        </div>

        {/* UFO Beam */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400/50 to-transparent blur-sm"></div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-16 h-32 bg-gradient-to-b from-cyan-400/20 to-transparent blur-md opacity-60"></div>
      </div>
    </div>
  );
};

export default UFO;