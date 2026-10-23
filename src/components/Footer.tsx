import React from 'react';
import { MapPin, Phone, Compass, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#10271F] text-[#F7F4EC] border-t border-[#193B2E] pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#193B2E]">
          {/* Brand & Tamil Wordmark Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#F7F4EC] block">
                {BUSINESS_DATA.name}
              </span>
              <span className="font-tamil text-sm text-[#A8B5A0] block mt-0.5">
                {BUSINESS_DATA.tamilName}
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#DDE4D8] leading-relaxed max-w-sm">
              A garden-inspired café experience in Mylapore, Chennai. Thoughtful plates,
              comforting coffee and unhurried moments surrounded by greenery.
            </p>

            <div className="pt-2 text-xs text-[#A8B5A0] flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#B49A67]" />
              <span>Associated with {BUSINESS_DATA.hotelAffiliation}</span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B49A67] block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium text-[#DDE4D8]">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#B49A67] transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#B49A67] transition-colors focus:outline-none"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#B49A67] transition-colors focus:outline-none"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#B49A67] transition-colors focus:outline-none"
                >
                  The Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#B49A67] transition-colors focus:outline-none"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#B49A67] transition-colors focus:outline-none"
                >
                  Before You Visit (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Telephone Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B49A67] block mb-4">
              Location & Contact
            </span>

            <div className="flex items-start gap-3 text-xs text-[#DDE4D8]">
              <MapPin className="w-4 h-4 text-[#B49A67] shrink-0 mt-0.5" />
              <span>
                146, Dr Radha Krishnan Salai,
                <br />
                Mylapore, Chennai, Tamil Nadu 600004
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#DDE4D8]">
              <Phone className="w-4 h-4 text-[#B49A67] shrink-0" />
              <a
                href={`tel:${BUSINESS_DATA.contact.phoneRaw}`}
                className="hover:text-[#B49A67] font-mono transition-colors"
              >
                {BUSINESS_DATA.contact.publicPhone}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_DATA.links.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B49A67] hover:text-[#c4ab7a] transition-colors"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B5A0]">
          <div>
            &copy; {currentYear} The Brew Room. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAudit}
              className="text-xs underline hover:text-[#F7F4EC] transition-colors focus:outline-none"
            >
              Owner Verification Checklist
            </button>
            <span>·</span>
            <span>Savera Hotel, Mylapore, Chennai</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
