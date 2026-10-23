/**
 * Menu Data Configuration for The Brew Room (தி ப்ரூ ரூம்)
 * Mentions authentic dishes from real customer feedback.
 * Adheres strictly to the accuracy mandate: exact individual prices are marked
 * for venue verification; average spend is provided as ₹400–₹600 per person.
 */

export interface MenuItem {
  id: string;
  name: string;
  category:
    | 'coffee-hot'
    | 'cold-refreshments'
    | 'breakfast'
    | 'savoury'
    | 'mains'
    | 'desserts';
  categoryLabel: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  highlightTag?: string;
  customerNote?: string;
  verificationStatus: 'confirmed_popular_dish' | 'pending_printed_card_review';
}

export interface MenuCategory {
  id: string;
  label: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Selections' },
  { id: 'coffee-hot', label: 'Coffee & Hot Beverages' },
  { id: 'cold-refreshments', label: 'Cold Brews & Refreshments' },
  { id: 'breakfast', label: 'European Breakfast' },
  { id: 'savoury', label: 'Savoury Small Plates' },
  { id: 'mains', label: 'Pasta & Curries' },
  { id: 'desserts', label: 'Artisan Desserts' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'old-fashioned-chocolate-cake',
    name: 'Old Fashioned Chocolate Cake',
    category: 'desserts',
    categoryLabel: 'Artisan Desserts',
    description:
      'Multi-layered moist chocolate sponge enrobed in a rich, velvety dark chocolate ganache glaze, finished with delicate chocolate curls.',
    image: '/src/assets/images/garden_dessert_chocolate_1792768041111.jpg',
    isFeatured: true,
    highlightTag: 'Guest Favourite',
    customerNote: 'Consistently celebrated in guest reviews for its deep cacao richness.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'classic-pesto-pasta',
    name: 'Handcrafted Basil Pesto Pasta',
    category: 'mains',
    categoryLabel: 'Pasta & Curries',
    description:
      'Tagliatelle ribbons tossed in fresh sweet Genovese basil pesto, extra virgin olive oil, toasted pine nuts, and freshly shaved Parmigiano-Reggiano.',
    image: '/src/assets/images/garden_pesto_pasta_1792768040898.jpg',
    isFeatured: true,
    highlightTag: 'Garden Classic',
    customerNote: 'Frequently cited for fragrant herbal brightness and fresh preparation.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'artisanal-cappuccino',
    name: 'Artisanal Reserve Cappuccino',
    category: 'coffee-hot',
    categoryLabel: 'Coffee & Hot Beverages',
    description:
      'Double ristretto shot paired with textured velvety microfoam, poured with precision latte art in a warm ceramic cup.',
    image: '/src/assets/images/coffee_artisanal_pour_1792768041711.jpg',
    isFeatured: true,
    highlightTag: 'House Roast',
    customerNote: 'Balanced roast notes with a gentle sweet finish.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'signature-hot-chocolate',
    name: 'Decadent European Hot Chocolate',
    category: 'coffee-hot',
    categoryLabel: 'Coffee & Hot Beverages',
    description:
      'Thick, molten chocolate steamed with whole milk and subtle vanilla undertones, served warm for comforting garden afternoons.',
    image: '/src/assets/images/coffee_artisanal_pour_1792768041711.jpg',
    highlightTag: 'Comfort Classic',
    customerNote: 'Highly praised by dessert lovers and evening visitors.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'warm-brownie-ice-cream',
    name: 'Warm Fudge Brownie with Ice Cream',
    category: 'desserts',
    categoryLabel: 'Artisan Desserts',
    description:
      'Freshly warmed walnut fudge brownie served with a scoop of pure Madagascar vanilla bean ice cream and warm chocolate drizzle.',
    image: '/src/assets/images/garden_dessert_chocolate_1792768041111.jpg',
    customerNote: 'A timeless pairing enjoyed in the courtyard after lunch.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'creamy-chicken-soup',
    name: 'Creamy Chicken Soup with Fresh Herbs',
    category: 'savoury',
    categoryLabel: 'Savoury Small Plates',
    description:
      'Slow-simmered velouté with shredded tender chicken breast, aromatic garden herbs, and toasted garlic brioche croutons.',
    image: '/src/assets/images/story_cafe_veranda_1792768039687.jpg',
    customerNote: 'Comforting, gentle starter noted for generous flavor.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'thai-green-curry',
    name: 'Aromatic Thai Green Curry',
    category: 'mains',
    categoryLabel: 'Pasta & Curries',
    description:
      'Fragrant coconut cream infused with kaffir lime, galangal, bamboo shoots and seasonal garden vegetables, served with steamed jasmine rice.',
    image: '/src/assets/images/hero_garden_cafe_1792768039174.jpg',
    customerNote: 'Popular pan-Asian option for a leisurely savoury meal.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'belgian-waffles',
    name: 'Golden Belgian Waffles',
    category: 'breakfast',
    categoryLabel: 'European Breakfast',
    description:
      'Crisp-on-the-outside malted waffles served with pure maple syrup, whipped cultured butter, and fresh seasonal berry compote.',
    image: '/src/assets/images/story_cafe_veranda_1792768039687.jpg',
    highlightTag: 'Breakfast Special',
    customerNote: 'Light, crisp texture loved by morning visitors.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'eggs-benedict',
    name: 'Classic Garden Eggs Benedict',
    category: 'breakfast',
    categoryLabel: 'European Breakfast',
    description:
      'Poached free-range eggs on toasted English muffins with sautéed baby spinach, topped with rich lemon butter hollandaise.',
    image: '/src/assets/images/hero_garden_cafe_1792768039174.jpg',
    highlightTag: 'Brunch Staple',
    customerNote: 'A classic European breakfast staple served until midday.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'cold-brew-reserve',
    name: '18-Hour Steeped Cold Brew',
    category: 'cold-refreshments',
    categoryLabel: 'Cold Brews & Refreshments',
    description:
      'Smooth, low-acidity single origin brew extracted slowly over eighteen hours, served over crystal clear ice with citrus peel.',
    image: '/src/assets/images/coffee_artisanal_pour_1792768041711.jpg',
    customerNote: 'Refreshing and clean for warm Chennai midday hours.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'grilled-fish-herb-butter',
    name: 'Pan-Seared Fish with Herb Butter',
    category: 'mains',
    categoryLabel: 'Pasta & Curries',
    description:
      'Delicate fillet seared to a golden finish with garlic-dill compound butter, charred lemon, and a side of dressed garden greens.',
    image: '/src/assets/images/hero_garden_cafe_1792768039174.jpg',
    customerNote: 'Frequently recommended in dining reviews for its freshness.',
    verificationStatus: 'confirmed_popular_dish',
  },
  {
    id: 'lemon-basil-iced-tea',
    name: 'Hand-Muddled Lemon Basil Iced Tea',
    category: 'cold-refreshments',
    categoryLabel: 'Cold Brews & Refreshments',
    description:
      'Brewed Nilgiri black tea infused with garden-fresh basil leaves, freshly squeezed yellow lemon juice, and a touch of wild honey.',
    image: '/src/assets/images/coffee_artisanal_pour_1792768041711.jpg',
    customerNote: 'Crisp and aromatic botanical refreshment.',
    verificationStatus: 'confirmed_popular_dish',
  },
];
