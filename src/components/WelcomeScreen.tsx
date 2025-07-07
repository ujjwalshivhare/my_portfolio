import React, { useState, useEffect } from 'react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const welcomeLines = [
    'Initializing DevOps Universe...',
    'Loading Stellar Infrastructure...',
    'Activating CI/CD Pipelines...',
    'Welcome to Ujjwal\'s Universe 🚀'
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (isComplete) return;

    if (currentLine >= welcomeLines.length) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
      return;
    }

    const currentText = welcomeLines[currentLine];
    
    if (currentChar < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, welcomeLines, onComplete, isComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 via-indigo-900/30 to-black"></div>
      
      {/* Nebula Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `shooting-star ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Welcome Content */}
      <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 max-w-lg w-full mx-4 relative z-10">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">DevOps Universe</h1>
          <p className="text-gray-400 text-sm">Entering Ujjwal's Digital Galaxy</p>
        </div>

        <div className="font-mono text-sm text-green-400 space-y-2 min-h-[120px]">
          {welcomeLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="flex items-center">
              <span className="text-cyan-400 mr-2">$</span>
              <span>
                {index === currentLine
                  ? line.slice(0, currentChar)
                  : line
                }
                {index === currentLine && showCursor && !isComplete && (
                  <span className="bg-green-400 text-black px-0.5 ml-0.5">_</span>
                )}
              </span>
            </div>
          ))}
          
          {isComplete && (
            <div className="flex items-center mt-4">
              <span className="text-cyan-400 mr-2">$</span>
              <span className="text-green-400">Loading complete! Redirecting...</span>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(-100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;