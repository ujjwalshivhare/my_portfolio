import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Cloud, 
  Code, 
  Container, 
  Settings, 
  GitBranch, 
  Activity, 
  BarChart3, 
  Rocket, 
  Terminal,
  Database,
  Shield
} from 'lucide-react';

interface OrbitTool {
  name: string;
  icon: React.ComponentType<any>;
  angle: number;
  speed: number;
  color: string;
}

const OrbitRing: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const tools: OrbitTool[] = [
    { name: 'Docker', icon: Container, angle: 0, speed: 0.5, color: 'text-blue-400' },
    { name: 'Kubernetes', icon: Settings, angle: 30, speed: 0.5, color: 'text-blue-500' },
    { name: 'Jenkins', icon: Settings, angle: 60, speed: 0.5, color: 'text-red-400' },
    { name: 'GitHub', icon: GitBranch, angle: 90, speed: 0.5, color: 'text-gray-300' },
    { name: 'Ansible', icon: Box, angle: 120, speed: 0.5, color: 'text-red-500' },
    { name: 'Terraform', icon: Code, angle: 150, speed: 0.5, color: 'text-purple-400' },
    { name: 'AWS', icon: Cloud, angle: 180, speed: 0.5, color: 'text-orange-400' },
    { name: 'Prometheus', icon: Activity, angle: 210, speed: 0.5, color: 'text-orange-500' },
    { name: 'Grafana', icon: BarChart3, angle: 240, speed: 0.5, color: 'text-orange-600' },
    { name: 'ArgoCD', icon: Rocket, angle: 270, speed: 0.5, color: 'text-cyan-400' },
    { name: 'Linux', icon: Terminal, angle: 300, speed: 0.5, color: 'text-yellow-400' },
    { name: 'Python', icon: Database, angle: 330, speed: 0.5, color: 'text-green-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  const opacity = Math.max(0.1, 1 - (scrollY / 800));

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-20"
      style={{ 
        opacity: typeof window !== 'undefined' && window.innerWidth >= 1024 
          ? opacity 
          : (scrollY < (typeof window !== 'undefined' ? window.innerHeight : 800) ? 1 : 0) 
      }}
    >
      {/* Orbit Ring Glow */}
      <div className="absolute w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-sm animate-pulse"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-md"></div>
      </div>

      {/* Orbiting Tools */}
      {tools.map((tool, index) => {
        const totalAngle = rotation + tool.angle;
        const radians = (totalAngle * Math.PI) / 180;
        const radius = 200; // Keep original radius for all devices
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius * 0.6; // Elliptical orbit

        return (
          <div
            key={tool.name}
            className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <div className="relative">
              {/* Tool Icon */}
              <div className={`w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 flex items-center justify-center ${tool.color} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50`}>
                <tool.icon size={24} />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Tool Name Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {tool.name}
              </div>
            </div>
          </div>
        );
      })}

      {/* Center Orbit Lines */}
      <div className="absolute w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-cyan-500/20 animate-spin-slow"></div>
      <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full border border-purple-500/10 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
    </div>
  );
};

export default OrbitRing;