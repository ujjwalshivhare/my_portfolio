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
      {/* UFO Structure */}
      <div className="relative">
        {/* UFO Main Body - Classic Flying Saucer Shape */}
        <div className="relative w-24 h-12">
          {/* UFO Base (Bottom Disc) */}
          <div className="absolute bottom-0 w-24 h-6 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full shadow-2xl">
            {/* UFO Lights around the edge */}
            <div className="absolute top-1 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1 left-6 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-1 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute top-1 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute top-1 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          </div>
          
          {/* UFO Dome (Top) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-cyan-200/70 via-cyan-300/50 to-transparent rounded-full border border-cyan-300/30">
            {/* Dome Reflection */}
            <div className="absolute top-1 left-2 w-3 h-2 bg-white/40 rounded-full blur-sm"></div>
          </div>
          
          {/* UFO Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 blur-lg animate-pulse"></div>
        </div>

        {/* Alien Pilot */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-10">
          {/* Alien Head */}
          <div className="relative w-8 h-10 bg-gradient-to-b from-green-300 to-green-400 rounded-full">
            {/* Alien Eyes */}
            <div className="absolute top-2 left-1 w-2 h-2 bg-black rounded-full">
              <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
            </div>
            <div className="absolute top-2 right-1 w-2 h-2 bg-black rounded-full">
              <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
            </div>
            
            {/* Alien Mouth */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
            
            {/* Infinity Symbol on Forehead */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-cyan-400"
              style={{
                transform: `translateX(-50%) translateY(-4px) rotate(${rotation}deg)`,
                filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))'
              }}
            >
              <Infinity size={16} />
            </div>
          </div>
          
          {/* Alien Body (visible through dome) */}
          <div className="w-6 h-4 bg-gradient-to-b from-green-400 to-green-500 rounded-b-lg mx-auto">
            {/* Alien Arms */}
            <div className="absolute -left-1 top-1 w-2 h-3 bg-green-400 rounded-full transform rotate-12"></div>
            <div className="absolute -right-1 top-1 w-2 h-3 bg-green-400 rounded-full transform -rotate-12"></div>
          </div>
        </div>

        {/* UFO Tractor Beam */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-40 bg-gradient-to-b from-cyan-400/60 to-transparent blur-sm"></div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-20 h-40 bg-gradient-to-b from-cyan-400/20 to-transparent blur-lg opacity-60"></div>
        
        {/* Beam Particles */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-bounce"
              style={{
                left: `${(i - 2) * 8}px`,
                top: `${20 + i * 15}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UFO;