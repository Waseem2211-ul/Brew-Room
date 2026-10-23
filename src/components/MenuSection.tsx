import React, { useState, useMemo } from 'react';
import { Search, Sparkles, AlertCircle, ArrowRight, Heart } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menu';
import { BUSINESS_DATA } from '../data/business';

interface MenuSectionProps {
  onPlanVisit: () => void;
  onOpenAudit?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onPlanVisit, onOpenAudit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="py-24 lg:py-32 bg-[#F7F4EC] border-b border-[#DCD8CC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#315642] mb-3 block">
              THE MENU
            </span>
            <h2
              id="menu-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#10271F] leading-[1.15]"
            >
              Something for Every Craving
            </h2>
            <p className="font-sans text-base text-[#77786F] mt-3 max-w-xl">
              Coffee, comforting plates and a little something sweet.
            </p>
          </div>

          {/* Indicative Spend & Trust Notice */}
          <div className="bg-[#EEE8DA] border border-[#DCD8CC] px-4 py-3 rounded-xs text-xs text-[#262722] max-w-sm">
            <div className="flex items-center gap-1.5 font-semibold text-[#193B2E] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#B49A67]" />
              <span>Indicative Average Spend</span>
            </div>
            <p className="text-[#77786F]">
              {BUSINESS_DATA.reputation.indicativeSpend}. Seasonal daily items verified
              from the printed card at the venue.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar (Search + Segmented Category Controls) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#DCD8CC]">
          {/* Segmented Category Buttons */}
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium tracking-wide rounded-sm transition-all whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193B2E] ${
                    isActive
                      ? 'bg-[#193B2E] text-[#F7F4EC] shadow-xs'
                      : 'bg-[#EEE8DA]/70 text-[#262722] hover:bg-[#EEE8DA] hover:text-[#193B2E]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full lg:w-64 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#77786F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or coffee..."
              aria-label="Search dishes or beverages"
              className="w-full pl-9 pr-4 py-2 bg-[#FFFFFF] border border-[#DCD8CC] rounded-sm text-xs text-[#262722] placeholder:text-[#77786F] focus:outline-none focus:ring-1 focus:ring-[#193B2E] focus:border-[#193B2E] transition-colors"
            />
          </div>
        </div>

        {/* Featured Dish Spotlight (Chocolate Cake & Pesto Tagliatelle) */}
        {selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-14 p-6 sm:p-8 bg-[#EEE8DA]/50 border border-[#DCD8CC] rounded-xs">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#315642] mb-4">
              <Heart className="w-3.5 h-3.5 text-[#B49A67]" />
              <span>GUEST HIGHLIGHT SPOTLIGHT</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Highlight 1 */}
              <div className="flex gap-4 sm:gap-6 items-center">
                <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-xs overflow-hidden shrink-0 border border-[#DCD8CC]">
                  <img
                    src="/src/assets/images/garden_dessert_chocolate_1792768041111.jpg"
                    alt="Old Fashioned Chocolate Cake"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#B49A67] font-semibold">
                    Pastry Highlight
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#10271F] font-medium">
                    Old Fashioned Chocolate Cake
                  </h4>
                  <p className="font-sans text-xs text-[#77786F] mt-1 line-clamp-2">
                    Rich layers of dark chocolate sponge enrobed in silky ganache glaze.
                  </p>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex gap-4 sm:gap-6 items-center">
                <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-xs overflow-hidden shrink-0 border border-[#DCD8CC]">
                  <img
                    src="/src/assets/images/garden_pesto_pasta_1792768040898.jpg"
                    alt="Handcrafted Basil Pesto Pasta"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#315642] font-semibold">
                    Savoury Highlight
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl text-[#10271F] font-medium">
                    Handcrafted Basil Pesto Pasta
                  </h4>
                  <p className="font-sans text-xs text-[#77786F] mt-1 line-clamp-2">
                    Tagliatelle with Genovese basil pesto, toasted pine nuts and parmesan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs overflow-hidden hover:border-[#193B2E]/40 transition-all duration-300 hover:shadow-xs"
              >
                {/* Visual Thumbnail */}
                <div className="aspect-[16/10] overflow-hidden bg-[#EEE8DA] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  {item.highlightTag && (
                    <span className="absolute top-3 left-3 bg-[#10271F]/90 backdrop-blur-xs text-[#F7F4EC] text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-xs">
                      {item.highlightTag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#77786F] mb-1.5 uppercase tracking-wider">
                      <span>{item.categoryLabel}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#10271F] group-hover:text-[#315642] transition-colors mb-2">
                      {item.name}
                    </h3>

                    <p className="font-sans text-xs text-[#262722]/80 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Customer Review Sentiment Note & Price Verification Marker */}
                  <div className="pt-3 border-t border-[#DCD8CC]/60 flex items-center justify-between text-[11px] text-[#77786F]">
                    <span className="italic truncate max-w-[200px]">
                      {item.customerNote || 'Served fresh daily'}
                    </span>
                    <span className="font-sans text-[10px] text-[#315642] uppercase tracking-wider">
                      At Venue Card
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#EEE8DA]/30 border border-[#DCD8CC] rounded-xs">
            <p className="font-serif text-xl text-[#10271F] mb-2">
              No matching selections found
            </p>
            <p className="font-sans text-xs text-[#77786F] mb-4">
              Try searching with another keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-medium text-[#193B2E] bg-[#FFFFFF] border border-[#DCD8CC] rounded-xs hover:bg-[#F7F4EC] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Accuracy Safeguard Callout */}
        <div className="mt-12 p-5 bg-[#EEE8DA]/60 border border-[#DCD8CC] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#B49A67] shrink-0 mt-0.5" />
            <div className="text-xs text-[#262722]/85">
              <span className="font-semibold text-[#193B2E]">Menu Accuracy Notice: </span>
              In accordance with hospitality verification standards, specific prices and
              daily kitchen availability are confirmed directly at The Brew Room.
            </div>
          </div>
          {onOpenAudit && (
            <button
              onClick={onOpenAudit}
              className="text-xs text-[#193B2E] font-medium underline underline-offset-4 hover:text-[#315642] shrink-0"
            >
              View Verification Audit
            </button>
          )}
        </div>

        {/* CTA to Plan Visit */}
        <div className="mt-14 text-center">
          <button
            onClick={onPlanVisit}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#193B2E] text-[#F7F4EC] text-xs font-semibold uppercase tracking-[0.18em] rounded-xs hover:bg-[#10271F] transition-all hover:shadow-xs active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A67]"
          >
            <span>Plan Your Visit & Reserve</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
