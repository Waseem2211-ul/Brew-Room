import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onPlanVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4EC]/95 backdrop-blur-md shadow-xs border-b border-[#DCD8CC] py-3.5'
            : 'bg-[#F7F4EC] border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="group flex flex-col items-start select-none whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193B2E] rounded"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#193B2E] transition-colors group-hover:text-[#315642]">
              THE BREW ROOM
            </span>
            <span className="font-tamil text-[10px] tracking-normal text-[#77786F] -mt-0.5">
              தி ப்ரூ ரூம் · சென்னை
            </span>
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.18em] font-medium text-[#262722]"
          >
            <button
              onClick={() => scrollToSection('story')}
              className="hover:text-[#193B2E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#193B2E] hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-[#193B2E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#193B2E] hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="hover:text-[#193B2E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#193B2E] hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#193B2E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#193B2E] hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('visit')}
              className="hover:text-[#193B2E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#193B2E] hover:after:w-full after:transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Visit
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPlanVisit}
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#193B2E] text-[#F7F4EC] text-xs font-semibold uppercase tracking-[0.15em] rounded-sm hover:bg-[#10271F] transition-all hover:shadow-xs active:translate-y-px whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden p-2 rounded text-[#193B2E] hover:bg-[#EEE8DA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193B2E]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
};
