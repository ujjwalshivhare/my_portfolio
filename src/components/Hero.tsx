import React, { useState, useEffect } from 'react';
import { Download, MapPin, Mail, Phone } from 'lucide-react';

interface HeroProps {
  userInfo: {
    name: string;
    role: string;
    status: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

const Hero: React.FC<HeroProps> = ({ userInfo }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const yamlLines = [
    '---',
    'name: Ujjwal Shivhare',
    'role: DevOps Engineer',
    'status: "Open to Work"',
    'location: India',
    'specialization:',
    '  - Cloud Infrastructure',
    '  - CI/CD Automation',
    '  - Container Orchestration',
    '  - Infrastructure as Code',
    'contact:',
    '  email: ujjwalshivhare62@gmail.com',
    '  phone: +91 6268636934',
    'social:',
    '  github: ujjwalshivhare',
    '  linkedin: ujjwal-shivhare'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide animation when scrolled down, show when back at top
      if (scrollY > windowHeight * 0.5) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        // Reset animation when coming back to top
        if (scrollY < 100) {
          setCurrentLine(0);
          setCurrentChar(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isVisible || currentLine >= yamlLines.length) return;

    const currentText = yamlLines[currentLine];
    
    if (currentChar < currentText.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, yamlLines, isVisible]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = "/Ujjwal's Resume.pdf";
    link.download = "Ujjwal_Shivhare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center px-4 relative z-10">
      <div className="container mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Profile Image - Mobile */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50 relative z-10">
                <img 
                  src="/Screenshot_20231217_055456_Gallery-removebg.png" 
                  alt="Ujjwal Shivhare"
                  className="w-full h-full object-cover"
                />
                
                {/* Profile Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
              </div>

              {/* Resume Download Button - Mobile */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <button 
                  onClick={handleResumeDownload}
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  <Download size={20} className="text-white group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Download Resume
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* YAML Text - Mobile */}
          <div className="font-mono text-sm mb-6">
            <div className="text-green-400 space-y-1">
              {isVisible && yamlLines.slice(0, currentLine + 1).map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 mr-2 w-4 text-right text-xs">{index + 1}</span>
                  <span className="text-xs sm:text-sm">
                    {index === currentLine
                      ? line.slice(0, currentChar)
                      : line
                    }
                    {index === currentLine && showCursor && (
                      <span className="bg-green-400 text-black px-0.5 ml-0.5 animate-pulse">_</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Status Badge - Mobile */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">{userInfo.status}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={14} />
              <span className="text-sm">India</span>
            </div>
          </div>

          {/* Quick Contact - Mobile */}
          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${userInfo.email}`}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">Email</span>
            </a>
            <a
              href={`tel:${userInfo.phone}`}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">Call</span>
            </a>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - YAML Introduction (Takes 7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {/* YAML Text - No Border/Box */}
            <div className="font-mono text-lg">
              <div className="text-green-400 space-y-1">
                {isVisible && yamlLines.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-500 mr-3 w-6 text-right">{index + 1}</span>
                    <span>
                      {index === currentLine
                        ? line.slice(0, currentChar)
                        : line
                      }
                      {index === currentLine && showCursor && (
                        <span className="bg-green-400 text-black px-0.5 ml-0.5 animate-pulse">_</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">{userInfo.status}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${userInfo.email}`}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">Email</span>
              </a>
              <a
                href={`tel:${userInfo.phone}`}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">Call</span>
              </a>
            </div>
          </div>

          {/* Right Side - Profile & Orbit (Takes 5 columns, pushed to far right) */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50 relative z-10">
                <img 
                  src="/Screenshot_20231217_055456_Gallery-removebg.png" 
                  alt="Ujjwal Shivhare"
                  className="w-full h-full object-cover"
                />
                
                {/* Profile Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
              </div>

              {/* Resume Download Button - Moved slightly below */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <button 
                  onClick={handleResumeDownload}
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-4 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  <Download size={24} className="text-white group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded px-3 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Download Resume
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;