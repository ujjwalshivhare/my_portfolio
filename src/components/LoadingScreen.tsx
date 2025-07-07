import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const loadingLines = [
    'playbook: devops_galaxy.yml',
    'tasks:',
    '  - Initializing Galaxy Nodes...',
    '  - Activating Orbit Systems...',
    '  - Launching DevOps Pipeline...',
    'PLAY RECAP ✓'
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= loadingLines.length) {
      setTimeout(() => {
        onComplete();
      }, 1500);
      return;
    }

    const currentText = loadingLines[currentLine];
    
    if (currentChar < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, loadingLines, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
      
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="font-mono text-sm text-green-400 space-y-2">
          {loadingLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="flex items-center">
              <span className="text-cyan-400 mr-2">$</span>
              <span>
                {index === currentLine
                  ? line.slice(0, currentChar)
                  : line
                }
                {index === currentLine && showCursor && (
                  <span className="bg-green-400 text-black px-0.5 ml-0.5">_</span>
                )}
              </span>
            </div>
          ))}
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
    </div>
  );
};

export default LoadingScreen;