import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  const [asteroids, setAsteroids] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    // Generate stars
    const starArray = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2
    }));
    setStars(starArray);

    // Generate asteroids
    const asteroidArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.1
    }));
    setAsteroids(asteroidArray);
  }, []);

  useEffect(() => {
    const moveAsteroids = () => {
      setAsteroids(prev => 
        prev.map(asteroid => ({
          ...asteroid,
          x: (asteroid.x + asteroid.speed) % 100,
          y: (asteroid.y + asteroid.speed * 0.3) % 100
        }))
      );
    };

    const asteroidInterval = setInterval(moveAsteroids, 100);
    return () => clearInterval(asteroidInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 via-indigo-900/30 to-black"></div>
      
      {/* Nebula Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Asteroids */}
      {asteroids.map(asteroid => (
        <div
          key={asteroid.id}
          className="absolute bg-gray-400/30 rounded-full blur-sm"
          style={{
            left: `${asteroid.x}%`,
            top: `${asteroid.y}%`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            boxShadow: '0 0 10px rgba(156, 163, 175, 0.3)'
          }}
        />
      ))}
    </div>
  );
};

export default Background;