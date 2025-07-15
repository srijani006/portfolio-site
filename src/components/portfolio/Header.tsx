import React from 'react';
import { Home, User, Code, Briefcase, MessageCircle, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  showNavLinks?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, activeSection, scrollToSection, showNavLinks = true }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
      isDarkMode
        ? 'bg-black/95 border-blue-900/30 shadow-2xl shadow-blue-500/10'
        : 'bg-white/95 border-gray-200 shadow-lg shadow-blue-500/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Portfolio
          </div>
          
          {showNavLinks && (
            <div className="hidden md:flex space-x-2">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'tech', label: 'Tech Stack', icon: Code },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: MessageCircle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 active:scale-100 hover:shadow-md animate-slide-in-left ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/30 scale-105'
                      : isDarkMode
                      ? 'text-blue-300 hover:text-blue-400 hover:bg-blue-900/30 hover:shadow-blue-500/20'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100/80 hover:shadow-blue-500/10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          )}

          <button
            onClick={toggleTheme}
            className={`p-4 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 active:scale-100 animate-bounce-in ${
              isDarkMode
                ? 'bg-blue-900/40 text-yellow-400 hover:bg-blue-800/50 shadow-lg shadow-blue-400/20 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]'
                : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 shadow-lg shadow-gray-500/20 hover:shadow-[0_0_15px_rgba(107,114,128,0.4)]'
            }`}
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;