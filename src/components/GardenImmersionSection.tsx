import React from 'react';
import { Compass } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const GardenImmersionSection: React.FC = () => {
  return (
    <section
      aria-label="Garden Immersion"
      className="relative py-28 sm:py-36 lg:py-44 bg-[#10271F] text-[#F7F4EC] overflow-hidden"
    >
      {/* Background Photography with rich measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_garden_cafe_1792768039174.jpg"
          alt="Lush green garden courtyard with tranquil outdoor dining tables at The Brew Room"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-40 scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10271F] via-[#10271F]/80 to-[#10271F]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Fine Brass Accent Line */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-[#B49A67]" aria-hidden="true" />
          <Compass className="w-4 h-4 text-[#B49A67]" />
          <span className="w-10 h-px bg-[#B49A67]" aria-hidden="true" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A8B5A0] mb-4">
          AN URBAN SANCTUARY
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F7F4EC] leading-[1.1] mb-6 max-w-3xl text-balance">
          Where the City Slows Down.
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#DDE4D8] max-w-2xl font-light leading-relaxed mb-8 text-balance">
          A relaxed setting for coffee, conversations, leisurely meals and sweet endings.
        </p>

        <div className="inline-flex items-center gap-3 text-xs tracking-wider uppercase text-[#A8B5A0] border border-[#315642] px-5 py-2.5 rounded-full bg-[#10271F]/70 backdrop-blur-xs">
          <span>{BUSINESS_DATA.hotelAffiliation}</span>
          <span className="text-[#B49A67]">·</span>
          <span>{BUSINESS_DATA.address.street}</span>
        </div>
      </div>
    </section>
  );
};
