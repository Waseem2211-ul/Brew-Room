/**
 * Gallery imagery dataset for The Brew Room (தி ப்ரூ ரூம்)
 * High-definition photography capturing the garden atmosphere, architecture, and dishes.
 */

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  theme: 'atmosphere' | 'culinary' | 'beverage';
  themeLabel: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'garden-courtyard-sunlight',
    title: 'The Open Garden Courtyard',
    subtitle: 'Mylapore Greenery',
    theme: 'atmosphere',
    themeLabel: 'Garden Ambience',
    image: '/src/assets/images/hero_garden_cafe_1792768039174.jpg',
    aspect: 'landscape',
    caption:
      'Dappled morning sunlight filtering through towering tropical canopy and colonial white arches in the central open courtyard.',
  },
  {
    id: 'sunlit-veranda-interior',
    title: 'The Glass Conservatory Veranda',
    subtitle: 'Indoor Botanical Living',
    theme: 'atmosphere',
    themeLabel: 'Interior Spaces',
    image: '/src/assets/images/story_cafe_veranda_1792768039687.jpg',
    aspect: 'portrait',
    caption:
      'Airy indoor seating with tall arched windows, woven cane chairs, and cascading greenery overlooking the garden.',
  },
  {
    id: 'specialty-coffee-morning',
    title: 'Specialty Cappuccino & Latte Art',
    subtitle: 'Velvety Microfoam',
    theme: 'beverage',
    themeLabel: 'Coffee & Brews',
    image: '/src/assets/images/coffee_artisanal_pour_1792768041711.jpg',
    aspect: 'square',
    caption:
      'Freshly prepared cappuccino poured into an artisanal ceramic cup, served amidst the tranquility of stone and greenery.',
  },
  {
    id: 'old-fashioned-chocolate-cake',
    title: 'Old Fashioned Chocolate Cake',
    subtitle: 'Dark Ganache Layering',
    theme: 'culinary',
    themeLabel: 'Artisan Pastry',
    image: '/src/assets/images/garden_dessert_chocolate_1792768041111.jpg',
    aspect: 'portrait',
    caption:
      'A guest favorite: dense chocolate fudge sponge layered with glossy dark chocolate ganache on handcrafted ivory stoneware.',
  },
  {
    id: 'handcrafted-pesto-pasta',
    title: 'Tagliatelle with Sweet Genovese Basil Pesto',
    subtitle: 'Tossed with Pine Nuts & Parmesan',
    theme: 'culinary',
    themeLabel: 'Savory Plates',
    image: '/src/assets/images/garden_pesto_pasta_1792768040898.jpg',
    aspect: 'landscape',
    caption:
      'Handcrafted pasta ribbons coated in fragrant basil pesto, crowned with lightly toasted pine nuts and aged Parmigiano-Reggiano.',
  },
  {
    id: 'botanical-tables-greenery',
    title: 'Unhurried Afternoon Tables',
    subtitle: 'Natural Textures',
    theme: 'atmosphere',
    themeLabel: 'Garden Ambience',
    image: '/src/assets/images/hero_garden_cafe_1792768039174.jpg',
    aspect: 'square',
    caption:
      'Rustic teakwood tables paired with delicate botanical foliage, inviting visitors to pause and linger.',
  },
];
