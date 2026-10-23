import React from 'react';
import { Coffee, UtensilsCrossed, Trees } from 'lucide-react';

interface ExperienceSectionProps {
  onViewMenu: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onViewMenu }) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 lg:py-32 bg-[#EEE8DA]/60 border-b border-[#DCD8CC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3 block">
            ATMOSPHERE & CRAFT
          </span>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15] text-balance mb-4"
          >
            Designed for Lingering
          </h2>
          <p className="font-sans text-base text-[#77786F] leading-relaxed text-pretty">
            Three distinct expressions that shape your visit to The Brew Room, curated
            with quiet care.
          </p>
        </div>

        {/* Feature A: Coffee & Conversation (Horizontal Editorial Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#315642] mb-3">
              <Coffee className="w-4 h-4 text-[#B49A67]" />
              <span>COFFEE & CONVERSATION</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#10271F] leading-snug mb-4">
              Made for a Moment of Your Own
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#262722]/80 leading-relaxed mb-6">
              Take a pause, enjoy a comforting cup and make room for good conversation.
              From micro-batch espresso extractions to our celebrated thick hot chocolate,
              every pour is crafted to accompany quiet readings or shared laughter.
            </p>
            <div className="text-xs text-[#77786F] flex items-center gap-3">
              <span>Espresso & Brew Bar</span>
              <span>·</span>
              <span>Artisanal Pours</span>
              <span>·</span>
              <span>Morning & Afternoon</span>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-xs overflow-hidden bg-[#DCD8CC] border border-[#DCD8CC]">
              <img
                src="/src/assets/images/coffee_artisanal_pour_1792768041711.jpg"
                alt="Velvety cappuccino latte art served on an outdoor stone garden table at The Brew Room"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Feature B: Something Delicious (Varied Split with Dual Culinary Highlights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xs overflow-hidden bg-[#DCD8CC] border border-[#DCD8CC]">
                <img
                  src="/src/assets/images/garden_pesto_pasta_1792768040898.jpg"
                  alt="Tagliatelle pasta with fresh Genovese basil pesto and shaved parmesan"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/3] rounded-xs overflow-hidden bg-[#DCD8CC] border border-[#DCD8CC]">
                <img
                  src="/src/assets/images/garden_dessert_chocolate_1792768041111.jpg"
                  alt="Rich dark chocolate cake slice with dark chocolate ganache glaze"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#315642] mb-3">
              <UtensilsCrossed className="w-4 h-4 text-[#B49A67]" />
              <span>SOMETHING DELICIOUS</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#10271F] leading-snug mb-4">
              From First Bite to Sweet Finish
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#262722]/80 leading-relaxed mb-6">
              Explore breakfast favourites, savoury plates, refreshing beverages and desserts.
              Whether sharing freshly tossed basil pesto pasta or treating yourself to our
              old-fashioned chocolate cake, the menu is built around thoughtful comfort.
            </p>
            <button
              onClick={onViewMenu}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#193B2E] underline underline-offset-4 hover:text-[#315642] transition-colors"
            >
              Browse Selected Dishes
            </button>
          </div>
        </div>

        {/* Feature C: A Garden in the City (Full-width Panoramic Layout) */}
        <div className="relative rounded-xs overflow-hidden border border-[#DCD8CC] bg-[#10271F] text-[#F7F4EC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 z-10">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#A8B5A0] mb-3">
                <Trees className="w-4 h-4 text-[#B49A67]" />
                <span>A GARDEN IN THE CITY</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EC] leading-snug mb-4">
                A Change of Pace
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#DDE4D8] leading-relaxed mb-6">
                Discover a garden-inspired setting for relaxed meals and unhurried moments.
                Filtered sunlight, birdsong, and verdant palms create an atmosphere that feels
                miles away from the busy streets outside.
              </p>
              <div className="text-xs text-[#A8B5A0] flex items-center gap-2">
                <span>Shaded Courtyard</span>
                <span>·</span>
                <span>Tropical Plants</span>
                <span>·</span>
                <span>Natural Breeze</span>
              </div>
            </div>
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full min-h-[340px]">
              <img
                src="/src/assets/images/hero_garden_cafe_1792768039174.jpg"
                alt="Open-air patio courtyard with guests enjoying garden cafe dining"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
