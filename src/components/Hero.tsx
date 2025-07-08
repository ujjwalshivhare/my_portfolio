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
  const [mobileYamlVisible, setMobileYamlVisible] = useState(false);

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
      
      // For desktop - hide animation when scrolled down
      if (window.innerWidth >= 1024) {
        if (scrollY > windowHeight * 0.5) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
          if (scrollY < 100) {
            setCurrentLine(0);
            setCurrentChar(0);
          }
        }
      } else {
        // For mobile - show YAML when scrolled to second section
        if (scrollY > windowHeight * 0.7) {
          setMobileYamlVisible(true);
          setIsVisible(true);
          // Reset animation when entering YAML section
          if (!mobileYamlVisible) {
            setCurrentLine(0);
            setCurrentChar(0);
          }
        } else {
          setMobileYamlVisible(false);
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileYamlVisible]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // For desktop, use isVisible. For mobile, use mobileYamlVisible
    const shouldAnimate = window.innerWidth >= 1024 ? isVisible : mobileYamlVisible;
    
    if (!shouldAnimate || currentLine >= yamlLines.length) return;

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
  }, [currentLine, currentChar, yamlLines, isVisible, mobileYamlVisible]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = "/Ujjwal's Resume.pdf";
    link.download = "Ujjwal_Shivhare_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* First Section - Profile with Orbiting Tools (Full Screen) */}
        <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
          <div className="relative flex items-center justify-center">
            {/* Profile Image - Centered */}
            <div className="relative z-20">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50">
                <img 
                  src="/Screenshot_20231217_055456_Gallery-removebg.png" 
                  alt="Ujjwal Shivhare"
                  className="w-full h-full object-cover"
                />
                
                {/* Profile Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
              </div>

              {/* Resume Download Button */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <button 
                  onClick={handleResumeDownload}
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-2.5 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                >
                  <Download size={18} className="text-white group-hover:animate-bounce" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Download Resume
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - YAML Content (Appears on Scroll) */}
        <section className="min-h-screen flex items-center justify-center px-4 relative z-10 py-8">
          <div className="w-full max-w-md">
            {/* YAML Text Section */}
            <div className="font-mono text-sm bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
              <div className="text-green-400 space-y-1">
                {mobileYamlVisible && yamlLines.slice(0, currentLine + 1).map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-gray-500 mr-2 w-4 text-right text-xs">{index + 1}</span>
                    <span className="text-xs break-all">
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
                
                {/* Show complete YAML if animation is done */}
                {!mobileYamlVisible && (
                  <div className="text-gray-500 text-center py-4">
                    <p className="text-sm">Scroll down to see YAML content</p>
                    <div className="mt-2">
                      <div className="w-1 h-6 bg-cyan-400 mx-auto animate-bounce"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Contact - Below YAML */}
            {mobileYamlVisible && (
              <div className="flex justify-center gap-6 mt-8">
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
            )}
          </div>
        </section>
      </div>

      {/* Desktop Layout - Unchanged */}
      <section className="hidden lg:block min-h-screen">
        <div className="min-h-screen flex items-center px-4 relative z-10">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
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
        </div>
      </section>
    </>
  );
};

export default Hero;