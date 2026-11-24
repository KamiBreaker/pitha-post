// ─── Product Catalogue ────────────────────────────────────────────────────────
// ADDING A NEW PRODUCT: add one object here. The website renders it automatically.
// ADDING AN IMAGE:      drop the file into public/images/kits/ and set the image field.
// No other files need to change.
//
// Schema:
//   id           – URL-safe unique slug
//   name         – Display name
//   purchaseType – 'monthly' | 'one-time'
//   category     – 'subscription' | 'gift' | 'seasonal'  (grouping / filtering)
//   available    – set false to hide from catalogue without deleting
//   featured     – highlights one product in the hero
//   price        – in BDT (integer)
//   servings     – number of people, or null for gift boxes
//   tagline      – one short sentence used in cards
//   description  – two-sentence product description
//   badge        – pill label, or null
//   image        – path under /public  e.g. '/images/kits/winter-trio.webp'
//   includes     – array of { item, note } objects shown in the kit contents list
//   tips         – array of short tip strings shown on the How It Works page
//   pithas       – array of pitha variety names this kit covers

export const products = [
  {
    id:           'bhapa-starter',
    name:         'Bhapa Starter',
    purchaseType: 'monthly',
    category:     'subscription',
    available:    true,
    featured:     false,
    price:        650,
    servings:     4,
    tagline:      'The classic winter opener.',
    description:  'Steamed rice-cake kit for 4 people. Everything you need to make soft, fragrant bhapa pitha at home.',
    badge:        null,
    image:        '/images/kits/bhapa-starter.webp',
    includes: [
      { item: 'Rice flour',        note: 'Soft, finely milled for tender pitha' },
      { item: 'Khejur gur',        note: 'Deep, mellow date palm sweetness' },
      { item: 'Coconut',           note: 'For a fragrant, tender filling' },
      { item: 'Bhapa recipe card', note: 'Step by step' },
    ],
    tips: [
      'Add water gradually and rub the rice flour into soft crumbs.',
      'Letting the crumbs sit for a few minutes keeps each layer light.',
    ],
    pithas: ['Bhapa'],
  },

  {
    id:           'winter-trio',
    name:         'Winter Trio',
    purchaseType: 'monthly',
    category:     'subscription',
    available:    true,
    featured:     true,
    price:        1150,
    servings:     6,
    tagline:      'Three pithas. One sweet box.',
    description:  'Bhapa, Patishapta and Puli kit serving 6 people. The full Bengali winter experience in a single parcel.',
    badge:        'Most Popular',
    image:        '/images/kits/winter-trio.webp',
    includes: [
      { item: 'Rice flour',              note: 'Soft, finely milled for tender pitha' },
      { item: 'Khejur gur',              note: 'Deep, mellow date palm sweetness' },
      { item: 'Coconut',                 note: 'For a fragrant, tender filling' },
      { item: 'Three-pitha recipe card', note: 'Bhapa, patishapta and puli — step by step' },
    ],
    tips: [
      'For bhapa, keep the flour fluffy.',
      'For patishapta, keep the batter thin.',
      'For puli, seal the edges gently.',
    ],
    pithas: ['Bhapa', 'Patishapta', 'Puli'],
  },

  {
    id:           'gift-a-box',
    name:         'Gift a Box',
    purchaseType: 'one-time',
    category:     'gift',
    available:    true,
    featured:     false,
    price:        900,
    servings:     null,
    tagline:      'Send winter to someone you love.',
    description:  'A one-time gift package — send the warmth of Bengali winter pitha to family or friends near or far.',
    badge:        'Gift',
    image:        '/images/kits/gift-a-box.webp',
    includes: [
      { item: 'Rice flour',          note: 'Soft, finely milled for tender pitha' },
      { item: 'Khejur gur',          note: 'Deep, mellow date palm sweetness' },
      { item: 'Coconut',             note: 'For a fragrant, tender filling' },
      { item: 'Gift recipe card',    note: 'All three pithas, beautifully printed' },
    ],
    tips: [],
    pithas: ['Bhapa', 'Patishapta', 'Puli'],
  },

  // ── Upcoming products ──────────────────────────────────────────────────────
  // Uncomment and fill in details when ready. The catalogue renders them automatically.
  //
  // {
  //   id:           'family-feast',
  //   name:         'Family Feast',
  //   purchaseType: 'monthly',
  //   category:     'subscription',
  //   available:    false,  // set true when ready to publish
  //   featured:     false,
  //   price:        1800,
  //   servings:     12,
  //   tagline:      'Five pithas for a large gathering.',
  //   description:  'The full Pitha Post range for bigger tables.',
  //   badge:        'Coming Soon',
  //   image:        '/images/kits/family-feast.webp',
  //   includes: [],
  //   tips: [],
  //   pithas: ['Bhapa', 'Patishapta', 'Puli', 'Chitoi', 'Dudh Pitha'],
  // },
];

// ─── Derived helpers ──────────────────────────────────────────────────────────
/** All products currently visible in the catalogue */
export const availableProducts = products.filter((p) => p.available);

/** Products grouped by category */
export function getByCategory(category) {
  return availableProducts.filter((p) => p.category === category);
}

export const getProductById  = (id)  => products.find((p) => p.id === id);
export const getFeaturedProduct      = ()   => availableProducts.find((p) => p.featured);
