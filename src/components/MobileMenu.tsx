import React, { useEffect } from 'react';
import { X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { label: 'Home', target: 'hero' },
    { label: 'Our Story', target: 'story' },
    { label: 'Experience', target: 'experience' },
    { label: 'The Menu', target: 'menu' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Visit Us', target: 'visit' },
    { label: 'FAQ', target: 'faq' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#10271F] text-[#F7F4EC] animate-fadeIn"
    >
      {/* Top bar inside mobile overlay */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#193B2E]">
        <div className="flex flex-col">
          <span className="font-serif text-2xl tracking-wider text-[#F7F4EC]">
            THE BREW ROOM
          </span>
          <span className="font-tamil text-xs text-[#A8B5A0] tracking-normal">
            {BUSINESS_DATA.tamilName}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-lg border border-[#315642] text-[#F7F4EC] hover:bg-[#193B2E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-8 py-8 flex flex-col justify-center space-y-5 overflow-y-auto">
        {links.map((link, idx) => (
          <button
            key={link.target}
            onClick={() => handleLinkClick(link.target)}
            className="group flex items-center justify-between text-left font-serif text-2xl md:text-3xl text-[#F7F4EC] hover:text-[#B49A67] transition-colors py-2 border-b border-[#193B2E]/60 focus:outline-none focus-visible:text-[#B49A67]"
          >
            <span>{link.label}</span>
            <span className="text-xs font-sans tracking-widest text-[#A8B5A0] group-hover:text-[#B49A67] transition-colors">
              0{idx + 1}
            </span>
          </button>
        ))}
      </nav>

      {/* Footer information inside menu */}
      <div className="px-8 py-6 bg-[#0B1B15] border-t border-[#193B2E] space-y-4">
        <div className="flex items-start gap-2.5 text-xs text-[#DDE4D8]">
          <MapPin className="w-4 h-4 text-[#B49A67] shrink-0 mt-0.5" />
          <span>146, Dr Radha Krishnan Salai, Mylapore, Chennai</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <a
            href={`tel:${BUSINESS_DATA.contact.phoneRaw}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#F7F4EC] hover:text-[#B49A67] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#B49A67]" />
            <span>{BUSINESS_DATA.contact.publicPhone}</span>
          </a>
          <button
            onClick={() => handleLinkClick('visit')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#B49A67] text-[#10271F] rounded hover:bg-[#c4ab7a] transition-colors"
          >
            <span>Plan Visit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
