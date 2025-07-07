import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialIcons: React.FC = () => {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-4">
      <a
        href="https://github.com/ujjwalshivhare"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300"
      >
        <Github className="text-white group-hover:text-cyan-400 transition-colors" size={20} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          GitHub
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/ujjwal-shivhare-3457a6229/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center hover:border-blue-500/50 transition-all duration-300"
      >
        <Linkedin className="text-white group-hover:text-blue-400 transition-colors" size={20} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-blue-500/30 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          LinkedIn
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;