import React from 'react';

const generateFloatingParticles = (isDarkMode: boolean) => {
 const particles: JSX.Element[] = [];
  for (let i = 0; i < 50; i++) {
    particles.push(
      <div
        key={i}
        className={`absolute rounded-full animate-float-particle ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20'
            : 'bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-indigo-300/30'
        }`}
        style={{
          width: `${Math.random() * 8 + 4}px`,
          height: `${Math.random() * 8 + 4}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${15 + Math.random() * 25}s`
        }}
      />
    );
  }
  return particles;
};

interface AnimatedBackgroundProps {
  isDarkMode: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDarkMode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className={`absolute inset-0 transition-all duration-700 ${
        isDarkMode
          ? 'bg-gradient-to-br from-black via-blue-950/30 to-purple-950/30'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}>
        <div className="relative w-full h-full">
          {generateFloatingParticles(isDarkMode)}
        </div>
        <div className={`absolute inset-0 opacity-30 ${
          isDarkMode ? 'bg-gradient-waves-dark' : 'bg-gradient-waves-light'
        } animate-gradient-wave`}></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;