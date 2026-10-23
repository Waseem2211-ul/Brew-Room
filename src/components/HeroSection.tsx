import React, { useState } from 'react';
import { ArrowDown, MapPin, Compass } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onDiscoverStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onDiscoverStory,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Welcome to The Brew Room"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-[#10271F] text-[#F7F4EC] overflow-hidden"
    >
      {/* Background Photography Container */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src="/src/assets/images/hero_garden_cafe_1792768039174.jpg"
            alt="Sun-dappled courtyard with dining tables surrounded by tropical garden foliage at The Brew Room in Mylapore"
            referrerPolicy="no-referrer"
            loading="eager"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
              imgLoaded ? 'opacity-90 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#10271F] via-[#193B2E] to-[#315642]" />
        )}

        {/* Measured scrims: multi-layered subtle gradient ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10271F] via-[#10271F]/60 to-[#10271F]/40" />
        <div className="absolute inset-0 bg-[#10271F]/30 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#DDE4D8] mb-5">
          <span className="w-6 h-px bg-[#B49A67]" aria-hidden="true" />
          <span>MYLAPORE · CHENNAI</span>
          <span className="w-6 h-px bg-[#B49A67]" aria-hidden="true" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#F7F4EC] max-w-4xl leading-[1.1] mb-6 text-balance">
          A Little Escape in the Heart of Chennai.
        </h1>

        {/* Supporting Copy */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#DDE4D8] max-w-2xl font-light leading-relaxed mb-10 text-balance">
          {BUSINESS_DATA.supportingMessage}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 bg-[#F7F4EC] text-[#10271F] text-xs font-semibold uppercase tracking-[0.18em] rounded-sm hover:bg-[#EEE8DA] transition-all hover:shadow-lg active:translate-y-px whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
          >
            Explore the Menu
          </button>
          <button
            onClick={onDiscoverStory}
            className="w-full sm:w-auto px-7 py-4 border border-[#F7F4EC]/50 text-[#F7F4EC] text-xs font-medium uppercase tracking-[0.18em] rounded-sm hover:bg-[#F7F4EC]/10 hover:border-[#F7F4EC] transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F4EC]"
          >
            Discover The Brew Room
          </button>
        </div>

        {/* Location Indicator & Tamil Brand Seal */}
        <div className="mt-14 pt-8 border-t border-[#F7F4EC]/15 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A8B5A0]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B49A67]" />
            <span className="tracking-wide">146 Dr Radha Krishnan Salai, Chennai</span>
          </div>
          <span className="hidden sm:inline text-[#A8B5A0]/40">·</span>
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#B49A67]" />
            <span className="font-tamil text-xs text-[#DDE4D8]">
              {BUSINESS_DATA.tamilName}
            </span>
          </div>
        </div>

        {/* Scroll affordance */}
        <button
          onClick={onDiscoverStory}
          aria-label="Scroll down to read our story"
          className="mt-10 p-2 text-[#A8B5A0] hover:text-[#F7F4EC] transition-colors focus:outline-none"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
