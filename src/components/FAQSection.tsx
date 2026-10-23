import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 lg:py-32 bg-[#F7F4EC] border-b border-[#DCD8CC]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3 block">
            PRACTICAL DETAILS
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15]"
          >
            Before You Visit
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#77786F] mt-3">
            Essential information regarding location, dining arrangements, and café service.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const headingId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#EEE8DA]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193B2E]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#A8B5A0] tracking-wider">
                        0{index + 1}
                      </span>
                      <span className="font-serif text-lg sm:text-xl text-[#10271F] font-medium">
                        {item.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#315642] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#B49A67]' : ''
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className={`px-6 pb-6 pt-1 transition-all ${isOpen ? 'block' : 'hidden'}`}
                >
                  <div className="pl-8 border-l border-[#DCD8CC] text-xs sm:text-sm text-[#262722]/85 font-sans leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
