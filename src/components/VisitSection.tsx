import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface VisitSectionProps {
  onOpenAudit: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenAudit }) => {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="py-24 lg:py-32 bg-[#EEE8DA]/60 border-b border-[#DCD8CC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3 block">
            COME FIND US
          </span>
          <h2
            id="visit-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15]"
          >
            Your Table in the Garden Awaits.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#77786F] mt-3">
            Nestled inside Savera Hotel along Dr Radha Krishnan Salai in historic Mylapore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Information Column (Left / 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Address Card */}
            <div className="p-8 bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EEE8DA] rounded-xs text-[#193B2E] shrink-0">
                  <MapPin className="w-5 h-5 text-[#315642]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#315642] mb-1">
                    Location & Postal Address
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#10271F] mb-2">
                    {BUSINESS_DATA.name} ({BUSINESS_DATA.tamilName})
                  </h3>
                  <p className="font-sans text-sm text-[#262722]/85 leading-relaxed">
                    146, Dr Radha Krishnan Salai,
                    <br />
                    Mylapore, Chennai,
                    <br />
                    Tamil Nadu 600004, India.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#77786F]">
                    <Building2 className="w-3.5 h-3.5 text-[#B49A67]" />
                    <span>Located on the grounds of {BUSINESS_DATA.hotelAffiliation}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={BUSINESS_DATA.links.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#193B2E] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#10271F] transition-colors shadow-xs"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Driving Directions</span>
                    </a>
                    <a
                      href={BUSINESS_DATA.links.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#DCD8CC] text-[#193B2E] text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-[#EEE8DA] transition-colors"
                    >
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Telephone & Reservations Card */}
            <div className="p-8 bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EEE8DA] rounded-xs text-[#193B2E] shrink-0">
                  <Phone className="w-5 h-5 text-[#315642]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#315642] mb-1">
                    Direct Contact & Reservations
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#10271F] mb-1">
                    Call for Table Enquiries
                  </h3>
                  <p className="font-sans text-xs text-[#77786F] mb-4">
                    Direct table reservations, party arrangements, and daily inquiries are
                    handled via front desk telephone:
                  </p>
                  <a
                    href={`tel:${BUSINESS_DATA.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-mono font-semibold text-[#193B2E] hover:text-[#315642] transition-colors"
                  >
                    <span>{BUSINESS_DATA.contact.publicPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours & Service Options Card */}
            <div className="p-8 bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EEE8DA] rounded-xs text-[#193B2E] shrink-0">
                  <Clock className="w-5 h-5 text-[#315642]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#315642] mb-1">
                    Hours & Service Options
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#10271F] mb-2">
                    Operating Schedule Notice
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#262722]/85 leading-relaxed mb-4">
                    {BUSINESS_DATA.schedule.hoursNotice}{' '}
                    <span className="text-[#77786F]">
                      {BUSINESS_DATA.schedule.verificationNotice}
                    </span>
                  </p>

                  <div className="pt-3 border-t border-[#DCD8CC]/60 flex flex-wrap gap-4 text-xs font-medium text-[#10271F]">
                    {BUSINESS_DATA.serviceOptions.map((opt, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#315642]" />
                        <span>{opt}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column & Proposal Verification Banner (Right / 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#DCD8CC] bg-[#EEE8DA]">
              <img
                src="/src/assets/images/story_cafe_veranda_1792768039687.jpg"
                alt="Veranda dining at The Brew Room"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Proposal Audit & Accuracy Box */}
            <div className="p-6 bg-[#10271F] text-[#F7F4EC] rounded-xs border border-[#193B2E]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B49A67] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#B49A67]" />
                <span>Client Proposal & Data Verification</span>
              </div>
              <p className="font-sans text-xs text-[#DDE4D8] leading-relaxed mb-4">
                This digital experience is built with strict accuracy protocols.
                Business details and menu pricing are structured in a central configuration
                for café management review before official production release.
              </p>
              <button
                onClick={onOpenAudit}
                className="w-full py-2.5 px-4 bg-[#193B2E] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider rounded-xs border border-[#315642] hover:bg-[#315642] transition-colors"
              >
                Review Verification Checklist (5 Fields)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
