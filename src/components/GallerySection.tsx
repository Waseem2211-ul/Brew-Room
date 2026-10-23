import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { Lightbox } from './Lightbox';

export const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-24 lg:py-32 bg-[#EEE8DA]/40 border-b border-[#DCD8CC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3 block">
            A VISUAL TASTE
          </span>
          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15]"
          >
            Little Moments at The Brew Room
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#77786F] mt-3">
            Glimpses of dappled courtyard sunlight, quiet veranda corners, and handcrafted
            plates.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            // Apply varied column / row spans for editorial variety
            const isFeatured = index === 0;

            return (
              <figure
                key={item.id}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View photo: ${item.title}`}
                className={`group relative overflow-hidden rounded-xs bg-[#DCD8CC] border border-[#DCD8CC] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193B2E] ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-2 aspect-[16/10]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />

                {/* Subtle scrim & caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10271F]/90 via-[#10271F]/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-[#F7F4EC]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#B49A67] block mb-1">
                        {item.themeLabel}
                      </span>
                      <figcaption className="font-serif text-lg sm:text-xl font-normal text-[#F7F4EC]">
                        {item.title}
                      </figcaption>
                    </div>
                    <div className="p-2 rounded-full bg-[#F7F4EC]/20 text-[#F7F4EC] backdrop-blur-xs">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={GALLERY_ITEMS}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
};
