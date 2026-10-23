import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

interface VerificationAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationAuditModal: React.FC<VerificationAuditModalProps> = ({
  isOpen,
  onClose,
}) => {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#10271F]/80 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#F7F4EC] border border-[#DCD8CC] rounded-xs shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-[#10271F] text-[#F7F4EC] flex items-center justify-between border-b border-[#193B2E]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#B49A67]" />
            <div>
              <h2 id="audit-modal-title" className="font-serif text-lg sm:text-xl font-normal text-[#F7F4EC]">
                Owner Verification Audit Checklist
              </h2>
              <span className="text-[11px] font-sans text-[#A8B5A0] tracking-wide block">
                Pre-launch Data Integrity Protocol · The Brew Room
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close audit modal"
            className="p-1.5 rounded text-[#A8B5A0] hover:text-[#F7F4EC] hover:bg-[#193B2E] transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#262722]">
          <div className="p-4 bg-[#EEE8DA] border border-[#DCD8CC] rounded-xs text-xs leading-relaxed text-[#262722]/85">
            <p className="font-semibold text-[#193B2E] mb-1">
              Hospitality Digital Governance Mandate
            </p>
            This website proposal adheres strictly to truth-in-advertising guidelines. No
            unverified prices, schedules, or checkout portals are fabricated. Before official
            public launch, café management confirms the following 5 fields in{' '}
            <code className="text-[#193B2E] font-mono">src/data/business.ts</code>:
          </div>

          <div className="space-y-4">
            {BUSINESS_DATA.verificationAudit.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs flex flex-col sm:flex-row sm:items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-medium text-[#10271F]">
                      {item.label}
                    </span>
                    {item.isVerified ? (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-[#193B2E] bg-[#DDE4D8] px-2 py-0.5 rounded-xs">
                        <CheckCircle2 className="w-3 h-3 text-[#315642]" />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-[#77786F] bg-[#EEE8DA] px-2 py-0.5 rounded-xs">
                        <Clock className="w-3 h-3 text-[#B49A67]" />
                        Requires Venue Confirmation
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-[#262722]/90 font-medium">
                    {item.currentValue}
                  </p>
                  <p className="font-sans text-[11px] text-[#77786F] italic">
                    Safety Rule: {item.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border border-[#B49A67]/40 bg-[#B49A67]/10 rounded-xs flex items-start gap-3 text-xs text-[#262722]">
            <AlertTriangle className="w-4 h-4 text-[#B49A67] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#10271F]">Zero-Fabrication Guarantee: </span>
              In accordance with your creative direction, this website will never generate fake
              availability countdowns, invented chef quotes, or unauthorized delivery links.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#EEE8DA] border-t border-[#DCD8CC] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#193B2E] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#10271F] transition-colors"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};
