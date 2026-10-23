import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../data/gallery';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock scroll
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

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#10271F]/95 backdrop-blur-md transition-opacity duration-300"
    >
      {/* Close button top right */}
      <button
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-[#193B2E] text-[#F7F4EC] hover:bg-[#315642] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter and category top left */}
      <div className="absolute top-6 left-6 z-20 text-xs tracking-wider uppercase text-[#A8B5A0] flex items-center gap-2">
        <ImageIcon className="w-3.5 h-3.5 text-[#B49A67]" />
        <span>
          {currentIndex + 1} of {items.length}
        </span>
        <span>·</span>
        <span className="text-[#DDE4D8]">{currentItem.themeLabel}</span>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#193B2E]/80 text-[#F7F4EC] hover:bg-[#193B2E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image Viewport */}
      <div className="relative max-w-5xl max-h-[85vh] w-full px-6 flex flex-col items-center">
        <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xs border border-[#315642]/60 bg-[#0B1B15]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl">
          <h3 className="font-serif text-xl sm:text-2xl text-[#F7F4EC] font-normal">
            {currentItem.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#A8B5A0] mt-1.5 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#193B2E]/80 text-[#F7F4EC] hover:bg-[#193B2E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
