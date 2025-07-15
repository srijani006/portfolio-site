import React from 'react';
import { Calendar } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
  isVisible: boolean;
}

const projectsData = [
  {
    id: 1,
    title: 'VaxTraK 💉',
    description:
      'VaxTraK is an intuitive, smart vaccination tracking platform meticulously crafted to empower individuals and families in effortlessly managing their immunization schedules. It offers an array of powerful features, including personalized vaccine reminders, secure digital records, and a user-friendly dashboard that provides a comprehensive overview of immunization progress. With its clean interface and intuitive design, VaxTraK streamlines health management, ensuring no crucial vaccine is ever overlooked.',
    date: 'Frontend Developer | April 2025',
  },
  {
    id: 2,
    title: 'Monezzy 💰',
    description:
      'Monezzy is a pioneering, all-in-one AI-powered personal finance assistant engineered to demystify and optimize your financial management. This robust platform empowers users to meticulously track expenses, strategically save for personalized goals, seamlessly file ITR, and make astute financial decisions – all from a single, intelligent chat-based interface. Boasting features like dynamic smart dashboards, real-time insights, comprehensive loan comparisons, and an AI chatbot dedicated to answering financial queries, Monezzy equips individuals with the tools to deeply understand, expertly organize, and confidently command their finances.',
    date: 'Frontend Developer | June 2025',
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDarkMode, isVisible }) => {
  return (
    <section
      id="projects"
      className={`py-24 relative z-10 transition-all duration-700 ${
        isDarkMode ? 'bg-blue-950/20' : 'bg-gray-50/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <h2
            className={`font-playfair text-5xl md:text-7xl font-black mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Projects
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-shimmer" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-3xl backdrop-blur-lg border transition-all transform hover:scale-105 active:scale-100 duration-700 ${
                isDarkMode
                  ? 'bg-blue-900/20 border-blue-700/30'
                  : 'bg-white/80 border-gray-200/50'
              } ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
              style={{
                animation: isVisible ? `zoomIn 0.8s ease-out forwards` : '',
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="p-8 flex flex-col h-full">
                <h3
                  className={`font-playfair text-2xl font-bold mb-4 transition-all duration-500 group-hover:tracking-wider ${
                    isDarkMode
                      ? 'text-white group-hover:text-blue-300'
                      : 'text-gray-900 group-hover:text-blue-600'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-6 text-lg leading-relaxed transition-all duration-500 ${
                    isDarkMode
                      ? 'text-blue-100 group-hover:text-white'
                      : 'text-gray-600 group-hover:text-gray-800'
                  }`}
                >
                  {project.description}
                </p>
                <div
                  className={`flex items-center text-sm mt-auto transition-colors duration-500 ${
                    isDarkMode
                      ? 'text-blue-300 group-hover:text-blue-200'
                      : 'text-gray-500 group-hover:text-gray-600'
                  }`}
                >
                  <Calendar
                    size={16}
                    className="mr-2 transition-transform duration-500 group-hover:scale-125"
                  />
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
