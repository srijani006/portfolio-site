
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ showScrollTop, scrollToTop }) => {
  if (!showScrollTop) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 z-50 animate-bounce-in bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/40`}
    >
      <ArrowUp size={24} className="animate-bounce" />
    </button>
  );
};

export default ScrollToTopButton;
