
import React, { useState, useEffect } from 'react';
import AnimatedBackground from './portfolio/AnimatedBackground';
import Header from './portfolio/Header';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import TechStack from './portfolio/TechStack';
import Projects from './portfolio/Projects';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';
import ScrollToTopButton from './portfolio/ScrollToTopButton';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState({
    about: false,
    tech: false,
    projects: false,
    contact: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tech', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }

      setShowScrollTop(window.scrollY > 300);

      const newVisibility = { ...isVisible };
      Object.keys(newVisibility).forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            newVisibility[section as keyof typeof newVisibility] = true;
          }
        }
      });
      setIsVisible(newVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 96; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDarkMode ? 'dark bg-black' : 'bg-white'}`}>
      <AnimatedBackground isDarkMode={isDarkMode} />
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <main className="pt-24">
        <Hero isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
        <About isDarkMode={isDarkMode} isVisible={isVisible.about} />
        <TechStack isDarkMode={isDarkMode} isVisible={isVisible.tech} />
        <Projects isDarkMode={isDarkMode} isVisible={isVisible.projects} />
        <Contact isDarkMode={isDarkMode} isVisible={isVisible.contact} />
      </main>
      
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTopButton showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  );
};

export default Portfolio;