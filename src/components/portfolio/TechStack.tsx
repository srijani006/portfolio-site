
import React from 'react';

interface TechStackProps {
  isDarkMode: boolean;
  isVisible: boolean;
}

const techStack = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
];

const TechStack: React.FC<TechStackProps> = ({ isDarkMode, isVisible }) => {
  return (
    <section id="tech" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className={`font-playfair text-5xl md:text-7xl font-black mb-6 transition-all duration-700 animate-slide-in-right ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } hover:scale-105`}>
            Tech Stack
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-shimmer"></div>
        </div>

        <div className="grid grid-cols-6 gap-8 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`p-8 rounded-3xl backdrop-blur-lg border transition-all duration-1000 hover:shadow-2xl hover:scale-115 active:scale-110 text-center cursor-pointer transform group animate-bounce-in ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${
                isDarkMode
                  ? 'bg-blue-900/20 border-blue-700/30 hover:bg-blue-800/30 hover:shadow-blue-500/30'
                  : 'bg-white/80 border-gray-200/50 hover:bg-white/90 hover:shadow-blue-500/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className={`font-bold text-lg transition-all duration-500 ${
                isDarkMode ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
              }`}>
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;