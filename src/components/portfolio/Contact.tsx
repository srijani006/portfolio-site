import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Download, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
  isVisible: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode, isVisible }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className={`font-playfair text-5xl md:text-7xl font-black mb-6 transition-all duration-700 animate-slide-in-right ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } hover:scale-105`}>
            Get In Touch
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-shimmer"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className={`p-10 rounded-3xl backdrop-blur-lg border transition-all duration-1000 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform animate-slide-in-left ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            } ${
              isDarkMode
                ? 'bg-blue-900/20 border-blue-700/30 hover:bg-blue-800/30'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <h3 className={`text-3xl font-bold mb-8 transition-all duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 animate-slide-in-left stagger-1 ${
                  isDarkMode
                    ? 'hover:bg-blue-800/30 text-blue-100 hover:text-blue-400'
                    : 'hover:bg-gray-100/80 text-gray-600 hover:text-blue-600'
                }`}>
                  <Mail className="text-blue-500" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-lg">srijaniroy253@gmail.com</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 animate-slide-in-left stagger-2 ${
                  isDarkMode
                    ? 'hover:bg-blue-800/30 text-blue-100 hover:text-blue-400'
                    : 'hover:bg-gray-100/80 text-gray-600 hover:text-blue-600'
                }`}>
                  <Phone className="text-blue-500" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-lg">+91 6290416562</p>
                  </div>
                </div>

                <div className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-500 animate-slide-in-left stagger-3 ${
                  isDarkMode
                    ? 'hover:bg-blue-800/30 text-blue-100 hover:text-blue-400'
                    : 'hover:bg-gray-100/80 text-gray-600 hover:text-blue-600'
                }`}>
                  <MapPin className="text-blue-500" size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-lg">Kolkata, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="srijaniroy_cv_link"
                  download="Srijani_Roy_Resume.pdf"
                  className="w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 btn-gradient"
                >
                  <Download size={24} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            <div className={`p-10 rounded-3xl backdrop-blur-lg border transition-all duration-1000 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transform animate-slide-in-right ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            } ${
              isDarkMode
                ? 'bg-blue-900/20 border-blue-700/30 hover:bg-blue-800/30'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <h3 className={`text-3xl font-bold mb-8 transition-all duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="animate-slide-in-right stagger-1">
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-blue-200' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:scale-105 ${
                      isDarkMode
                        ? 'bg-blue-800/30 border-blue-600/50 text-white placeholder-blue-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="animate-slide-in-right stagger-2">
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-blue-200' : 'text-gray-700'
                  }`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:scale-105 ${
                      isDarkMode
                        ? 'bg-blue-800/30 border-blue-600/50 text-white placeholder-blue-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="animate-slide-in-right stagger-3">
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-blue-200' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:scale-105 ${
                      isDarkMode
                        ? 'bg-blue-800/30 border-blue-600/50 text-white placeholder-blue-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter subject"
                  />
                </div>

                <div className="animate-slide-in-right stagger-4">
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-blue-200' : 'text-gray-700'
                  }`}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none hover:scale-105 ${
                      isDarkMode
                        ? 'bg-blue-800/30 border-blue-600/50 text-white placeholder-blue-300'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 btn-gradient"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className={`text-center transform transition-all duration-1000 animate-slide-up ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h3 className={`text-3xl font-bold mb-10 transition-all duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Follow Me
            </h3>
            <div className="flex justify-center space-x-8">
              {[
                { icon: Github, href: 'https://github.com/srijani006', color: 'hover:text-gray-600', bgColor: 'hover:bg-gray-600/20' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/srijani-roy-b71353353/', color: 'hover:text-blue-600', bgColor: 'hover:bg-blue-600/20' },
                { icon: Twitter, href: 'https://x.com/srij4niii?t=lDPNoxj1ySiOw4Pi10vXRg&s=08', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-400/20' },
                { icon: Instagram, href: 'https://www.instagram.com/srij4niii?igsh=bGd6NWhzMjk4b3k5', color: 'hover:text-pink-500', bgColor: 'hover:bg-pink-500/20' }
              ].map(({ icon: Icon, href, color, bgColor }, index) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-100 ${
                    isDarkMode
                      ? 'bg-blue-800/30 text-blue-300 hover:bg-blue-700/40 hover:shadow-lg'
                      : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:shadow-lg'
                  } ${color} ${bgColor}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon size={28} className="transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-12" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;