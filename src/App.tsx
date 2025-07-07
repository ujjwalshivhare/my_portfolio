import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen';
import MouseTrail from './components/MouseTrail';
import OrbitRing from './components/OrbitRing';
import UFO from './components/UFO';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import SocialIcons from './components/SocialIcons';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const userInfo = {
    name: 'Ujjwal Shivhare',
    role: 'DevOps Engineer',
    status: 'Open to Work',
    email: 'ujjwalshivhare62@gmail.com',
    phone: '+91 6268636934',
    github: 'https://github.com/ujjwalshivhare',
    linkedin: 'https://www.linkedin.com/in/ujjwal-shivhare-3457a6229/'
  };

  useEffect(() => {
    // Initial loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Show loading screen first
  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  // Show welcome screen after loading
  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  // Show main portfolio content
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background Effects */}
      <Background />
      <MouseTrail />
      <UFO />
      <OrbitRing />
      
      {/* Social Icons */}
      <SocialIcons />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero userInfo={userInfo} />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Ujjwal Shivhare. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed in the DevOps Universe 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;