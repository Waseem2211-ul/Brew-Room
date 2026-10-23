import React from 'react';
import { Star, ExternalLink, MessageSquareHeart } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export const ReviewsSection: React.FC = () => {
  const verifiedThemes = [
    {
      title: 'Garden Ambience',
      description:
        'Guests frequently celebrate the rare feeling of sitting amidst lush green courtyard foliage in the center of Mylapore.',
    },
    {
      title: 'Coffee & Hot Chocolate',
      description:
        'Noted for rich, velvety hot chocolate and carefully brewed espresso drinks perfect for relaxed afternoon pauses.',
    },
    {
      title: 'Handmade Pasta & Plates',
      description:
        'Fresh basil pesto pasta and grilled dishes frequently mentioned for balanced European seasoning and freshness.',
    },
    {
      title: 'Desserts & Cakes',
      description:
        'The Old Fashioned Chocolate Cake and warm brownies with ice cream remain perennial favourites with returning patrons.',
    },
    {
      title: 'Indoor & Outdoor Seating',
      description:
        'Choice between the shaded open-air garden terrace or the air-conditioned white glass conservatory veranda.',
    },
    {
      title: 'Unhurried Pace',
      description:
        'Celebrated as a calm retreat from city traffic where visitors can enjoy unhurried conversation and relaxed dining.',
    },
  ];

  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-24 lg:py-32 bg-[#F7F4EC] border-b border-[#DCD8CC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3 block">
            THE EXPERIENCE
          </span>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15]"
          >
            Good Food. Good Company. Good Moments.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#77786F] mt-3">
            Grounded in over 3,600 authentic Google Maps patron reviews.
          </p>
        </div>

        {/* Reputation Badge Box */}
        <div className="max-w-3xl mx-auto mb-16 p-8 bg-[#EEE8DA] border border-[#DCD8CC] rounded-xs text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#193B2E] text-[#F7F4EC] flex items-center justify-center font-serif text-2xl font-bold">
                {BUSINESS_DATA.reputation.rating}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#B49A67] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'fill-[#B49A67]' : 'fill-[#B49A67]/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs font-semibold text-[#10271F] tracking-wide">
                  {BUSINESS_DATA.reputation.rating} out of 5 stars
                </div>
                <div className="text-xs text-[#77786F]">
                  Based on {BUSINESS_DATA.reputation.reviewCount.toLocaleString()} public reviews on{' '}
                  {BUSINESS_DATA.reputation.platform}
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_DATA.links.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFFFFF] border border-[#DCD8CC] text-[#193B2E] text-xs font-semibold uppercase tracking-[0.14em] rounded-xs hover:border-[#193B2E] transition-all shadow-xs"
            >
              <span>Read on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Authentic Customer Feedback Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {verifiedThemes.map((theme, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#315642] mb-2.5">
                  <MessageSquareHeart className="w-3.5 h-3.5 text-[#B49A67]" />
                  <span>{theme.title}</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#262722]/85 leading-relaxed">
                  {theme.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DCD8CC]/60 text-[11px] text-[#77786F] italic">
                Verified guest sentiment summary
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
