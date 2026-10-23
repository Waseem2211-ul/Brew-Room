import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#10271F] text-[#F7F4EC] text-xs tracking-[0.2em] uppercase py-2.5 px-4 text-center font-medium border-b border-[#193B2E] transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B49A67]" aria-hidden="true" />
        <span>A Garden Café in the Heart of Chennai</span>
        <span className="hidden sm:inline text-[#A8B5A0]">·</span>
        <span className="hidden sm:inline text-[#A8B5A0] lowercase tracking-normal text-[11px]">
          at Savera Hotel, Mylapore
        </span>
      </div>
    </aside>
  );
};
