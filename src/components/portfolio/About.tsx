import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface AboutProps {
  isDarkMode: boolean;
  isVisible: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode, isVisible }) => {
  return (
    <section id="about" className={`py-24 transition-all duration-700 relative z-10 ${
      isDarkMode ? 'bg-blue-950/20' : 'bg-gray-50/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className={`font-playfair text-5xl md:text-7xl font-black mb-6 transition-all duration-700 animate-slide-in-left ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } hover:scale-105`}>
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-shimmer"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className={`group relative overflow-hidden p-10 rounded-3xl backdrop-blur-lg border transition-all duration-700 hover:scale-105 hover:-rotate-1 active:scale-100 active:rotate-0 animate-slide-in-left ${
              isDarkMode
                ? 'bg-blue-900/20 border-blue-700/30'
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <div className="relative">
                <h3 className={`font-playfair text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                  Who Am I?
                </h3>
                <div className={`space-y-6 text-lg leading-relaxed ${
                  isDarkMode ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  <p className="animate-fade-in stagger-1">
                    Hey, I'm Srijani Roy, a B.Tech student in Information Technology at Netaji Subhash Engineering College, but more importantly, a passionate frontend artist and UI/UX enthusiast who doesn't just build websites, I craft digital experiences.
                  </p>
                  <p className="animate-fade-in stagger-2">
                    In a world full of code, I believe clarity, creativity, and empathy are what make a developer stand out. My passion lies in the intersection of design and logic, where user needs meet pixel-perfect interfaces. Whether it's an animated landing page or a responsive layout that just feels right, I thrive on making the web a more beautiful, intuitive space.
                  </p>
                  <p className="animate-fade-in stagger-3">
                    Right now, I'm mastering the tools and technologies that power the web, one project at a time, with a clear vision: to grow into a full-fledged web developer capable of building impactful, end-to-end digital products that don't just function, they impress.
                  </p>
                  <p className="animate-fade-in stagger-4">
                    I'm not just learning to code.<br />I'm learning to create what people remember.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <Accordion type="single" collapsible className="w-full space-y-6" defaultValue="item-0">
              {[
                {
                  title: 'Education',
                  color: isDarkMode ? 'text-blue-400' : 'text-blue-600',
                  delay: 'delay-200',
                  content: (
                    <div className={`space-y-6 text-lg ${isDarkMode ? 'text-blue-100' : 'text-gray-600'}`}>
                      <div className="animate-slide-in-right stagger-1">
                        <h4 className="font-bold text-xl mb-2">Class 10</h4>
                        <p className="text-lg">Auxilium Convent School</p>
                        <p className="text-base opacity-75">Scored: 89% | Year: 2022</p>
                      </div>
                      <div className="animate-slide-in-right stagger-2">
                        <h4 className="font-bold text-xl mb-2">Class 12</h4>
                        <p className="text-lg">Auxilium Convent School</p>
                        <p className="text-base opacity-75">Scored: 92% | Year: 2024</p>
                      </div>
                      <div className="animate-slide-in-right stagger-3">
                        <h4 className="font-bold text-xl mb-2">B.Tech in Information Technology</h4>
                        <p className="text-lg">Netaji Subhash Engineering College</p>
                        <p className="text-base opacity-75">Currently Pursuing | 2024 - 2028</p>
                      </div>
                    </div>
                  )
                },
                {
                  title: 'Interests',
                  color: isDarkMode ? 'text-purple-400' : 'text-purple-600',
                  delay: 'delay-400',
                  content: (
                    <div className={`space-y-3 text-lg ${isDarkMode ? 'text-blue-100' : 'text-gray-600'}`}>
                      {['Web Development', 'Machine Learning', 'Open Source', 'UI/UX Design', 'Photography', 'Gaming', 'Painting'].map((interest, i) => (
                        <p key={i} className={`flex items-center space-x-3 animate-slide-in-right stagger-${i + 1}`}>
                          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                          <span>{interest}</span>
                        </p>
                      ))}
                    </div>
                  )
                },
                {
                  title: 'Goals',
                  color: isDarkMode ? 'text-indigo-400' : 'text-indigo-600',
                  delay: 'delay-600',
                  content: (
                    <div className={`space-y-6 text-lg ${isDarkMode ? 'text-blue-100' : 'text-gray-600'}`}>
                      {[
                        'Build impactful web applications that solve real-world problems',
                        'Contribute to open-source projects',
                        'Become a senior full-stack developer',
                        'Start my own tech company'
                      ].map((goal, i) => (
                        <p key={i} className={`leading-relaxed animate-slide-in-right stagger-${i + 1}`}>{goal}</p>
                      ))}
                    </div>
                  )
                }
              ].map((section, index) => (
                <AccordionItem
                  key={section.title}
                  value={`item-${index}`}
                  className={`group relative overflow-hidden border-b-0 rounded-3xl backdrop-blur-lg border transition-all duration-700 hover:scale-105 hover:-rotate-1 active:scale-100 active:rotate-0 transform animate-slide-in-right ${
                    section.delay
                  } ${
                    isDarkMode
                      ? 'bg-blue-900/20 border-blue-700/30'
                      : 'bg-white/80 border-gray-200/50'
                  }`}
                >
                  <AccordionTrigger
                    className={`font-playfair relative p-6 text-2xl font-bold hover:no-underline ${section.color}`}
                  >
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="relative px-6 pb-6 pt-0">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;