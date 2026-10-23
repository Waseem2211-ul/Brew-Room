/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { ExperienceSection } from './components/ExperienceSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { GardenImmersionSection } from './components/GardenImmersionSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitSection } from './components/VisitSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { VerificationAuditModal } from './components/VerificationAuditModal';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EC] text-[#262722] selection:bg-[#193B2E] selection:text-[#F7F4EC]">
      {/* 01. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 02. Premium Navigation */}
      <Navbar onPlanVisit={() => scrollToSection('visit')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 03. Cinematic Hero Section */}
        <HeroSection
          onExploreMenu={() => scrollToSection('menu')}
          onDiscoverStory={() => scrollToSection('story')}
        />

        {/* 04. Editorial Story Section */}
        <StorySection onExploreExperience={() => scrollToSection('experience')} />

        {/* 05. Experience Features (3 curated aspects) */}
        <ExperienceSection onViewMenu={() => scrollToSection('menu')} />

        {/* 06. Menu Experience with Filter Tabs */}
        <MenuSection
          onPlanVisit={() => scrollToSection('visit')}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* 07. Visual Gallery with Lightbox */}
        <GallerySection />

        {/* 08. Garden Immersion Full-Width Feature */}
        <GardenImmersionSection />

        {/* 09. Verified Customer Reviews & Google Rating */}
        <ReviewsSection />

        {/* 10. Location, Phone & Directions */}
        <VisitSection onOpenAudit={() => setAuditModalOpen(true)} />

        {/* 11. Accessible FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 12. Premium Forest Green Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Micro-interaction: Back to Top */}
      <BackToTop />

      {/* Pre-launch Owner Verification Audit Modal */}
      <VerificationAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
