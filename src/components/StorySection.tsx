import React, { useState } from 'react';
import { ArrowRight, Leaf, Coffee, SunMedium } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface StorySectionProps {
  onExploreExperience: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({
  onExploreExperience,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="py-24 lg:py-32 bg-[#F7F4EC] border-b border-[#DCD8CC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (Asymmetrical Left / 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#EEE8DA] border border-[#DCD8CC]">
              <img
                src="/src/assets/images/story_cafe_veranda_1792768039687.jpg"
                alt="Airy white conservatory veranda with arched French doors and garden views at The Brew Room"
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 hover:scale-103 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#10271F]/90 backdrop-blur-md px-5 py-3 text-xs text-[#F7F4EC] flex items-center justify-between border-t border-[#315642]">
                <span className="font-serif italic text-sm text-[#DDE4D8]">
                  The Glass Veranda & Garden Court
                </span>
                <span className="text-[11px] font-sans text-[#A8B5A0] tracking-wider uppercase">
                  Savera Hotel, Mylapore
                </span>
              </div>
            </div>

            {/* Subtle botanical decorative accent */}
            <div
              className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 border border-[#B49A67]/30 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Editorial Content Column (Asymmetrical Right / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3">
              THE BREW ROOM EXPERIENCE
            </span>

            <h2
              id="story-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15] mb-6 text-balance"
            >
              Come for the Coffee.
              <br />
              <span className="italic">Stay for the Moment.</span>
            </h2>

            {/* Brass hairline divider */}
            <div className="w-16 h-px bg-[#B49A67] mb-6" aria-hidden="true" />

            <p className="font-sans text-base text-[#262722]/85 leading-relaxed mb-6 text-pretty">
              Discover a relaxed café atmosphere where coffee, comforting food, and a
              garden-inspired setting invite you to slow down and enjoy the moment.
            </p>

            <p className="font-sans text-sm text-[#77786F] leading-relaxed mb-8 text-pretty">
              Set within the grounds of Savera Hotel on Dr Radha Krishnan Salai, The Brew
              Room offers guests a peaceful haven from Chennai&apos;s bustling pace.
              Whether seated in the shaded outdoor garden under natural palms or inside the
              sunlit white conservatory veranda, every visit is designed to feel unhurried.
            </p>

            {/* 3 Editorial hallmarks */}
            <div className="w-full space-y-4 py-4 mb-8 border-y border-[#DCD8CC]">
              <div className="flex items-center gap-3 text-xs font-medium text-[#10271F]">
                <Leaf className="w-4 h-4 text-[#315642] shrink-0" />
                <span>Lush open garden courtyard & air-conditioned veranda</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-[#10271F]">
                <Coffee className="w-4 h-4 text-[#315642] shrink-0" />
                <span>Specialty espresso brews, cold dripped roasts & hot chocolate</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-[#10271F]">
                <SunMedium className="w-4 h-4 text-[#315642] shrink-0" />
                <span>European breakfast, fresh handmade pasta & artisan pastries</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onExploreExperience}
              className="group inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#193B2E] hover:text-[#315642] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193B2E] rounded-xs"
            >
              <span>Explore the Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
