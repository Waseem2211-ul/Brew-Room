import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#193B2E] text-[#F7F4EC] shadow-md hover:bg-[#10271F] transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67] active:translate-y-px"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
