/**
 * FAQ dataset for The Brew Room (தி ப்ரூ ரூம்)
 * All answers strictly rely on verified business information.
 * When specific policies (such as parking or pet rules) are not confirmed,
 * visitors are advised to contact the café directly at +91 97109 47380.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is The Brew Room located?',
    answer:
      'The Brew Room is located within the premises of Savera Hotel at 146, Dr Radha Krishnan Salai, Mylapore, Chennai, Tamil Nadu 600004, India. It features both a serene open garden dining courtyard and an air-conditioned white-walled conservatory veranda.',
  },
  {
    id: 'faq-2',
    question: 'How can I contact the café?',
    answer:
      'You can reach The Brew Room directly by telephone at +91 97109 47380. For inquiries regarding specific table availability, group arrangements, or daily offerings, the team at the front desk will assist you directly.',
  },
  {
    id: 'faq-3',
    question: 'What kind of food and beverages are available?',
    answer:
      'The Brew Room serves a European-style café menu featuring specialty espresso and filter coffee roasts, decadent hot chocolate, chilled botanical brews, European breakfasts (including waffles and eggs benedict), savoury small plates, handcrafted pasta, curries, and artisan desserts such as their celebrated Old Fashioned Chocolate Cake.',
  },
  {
    id: 'faq-4',
    question: 'Can I reserve a table in advance?',
    answer:
      'Yes, reservations are supported. For table arrangements—especially if you prefer outdoor garden seating during peak weekend brunch or evening hours—we recommend calling the café directly at +91 97109 47380 to verify seating availability.',
  },
  {
    id: 'faq-5',
    question: 'Is takeaway available?',
    answer:
      'Yes, takeaway is listed among the supported service options alongside dine-in service. Guests can order at the counter or call ahead to arrange convenient pick-up.',
  },
  {
    id: 'faq-6',
    question: 'Where can I view the current menu and prices?',
    answer:
      'You can explore the featured selections in the Menu section on this page. Indicative spend typically ranges from ₹400 to ₹600 per person. Please note that exact seasonal pricing and daily kitchen specials should be verified directly from the printed card at the venue.',
  },
  {
    id: 'faq-7',
    question: 'What are the opening hours?',
    answer:
      'Public business listings indicate evening closing around 11:00 PM. Because operating schedules and kitchen timings can vary across weekdays and public holidays, visitors are encouraged to confirm current daily hours directly by calling +91 97109 47380 prior to visiting.',
  },
];
