
import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-12 border-t transition-all duration-700 relative z-10 ${
      isDarkMode ? 'bg-black border-blue-900/30' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`text-lg transition-all duration-700 animate-fade-in ${
          isDarkMode ? 'text-blue-200' : 'text-gray-600'
        }`}>
          © 2025 Srijani Roy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
