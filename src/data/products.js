// ─── Product Catalogue ────────────────────────────────────────────────────────
// ADDING A NEW PRODUCT: add one object here. The website renders it automatically.
// ADDING AN IMAGE:      drop the file into public/images/kits/ and set the image field.
// No other files need to change.

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
      { item: 'Rice flour',        note: 'Finely milled for soft, tender pitha' },
      { item: 'Khejur gur',        note: 'Pure Jessore date palm molasses' },
      { item: 'Fresh coconut',     note: 'Grated and sealed for filling' },
      { item: 'Recipe card',       note: 'Simple step-by-step instructions' },
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
    tagline:      'Three classic pithas in one box.',
    description:  'Everything you need to make Bhapa, Patishapta, and Puli for 6 people. A complete winter feast for the family.',
    badge:        'Most Popular',
    image:        '/images/kits/winter-trio.webp',
    includes: [
      { item: 'Rice flour',              note: 'Stone-milled Atop flour for light texture' },
      { item: 'Khejur gur',              note: 'Smoky date palm jaggery from Jessore' },
      { item: 'Fresh coconut',           note: 'Grated and sealed for fillings' },
      { item: 'Three-pitha recipe card', note: 'Step-by-step for Bhapa, Patishapta, and Puli' },
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
    tagline:      'Send warm winter pithas to someone special.',
    description:  'A ready-to-share gift platter with handcrafted Nakshi, Patishapta, Puli, and traditional winter sweets in festive packaging.',
    badge:        'Gift Box',
    image:        '/images/kits/gift-a-box.webp',
    includes: [
      { item: 'Festive Pitha Assortment', note: 'Handcrafted Nakshi, Patishapta, Puli, and winter sweets' },
      { item: 'Jessore Nolen Gur dip',    note: 'Pure smoky date palm molasses' },
      { item: 'Gift presentation box',    note: 'Festive box with custom handwritten greeting card' },
      { item: 'Recipe booklet',           note: 'Traditional pitha stories and serving suggestions' },
    ],
    tips: [
      'Serve alongside warm tea or milk for weekend family gatherings.',
      'Warm gently for two minutes to bring out the fresh jaggery aroma.',
    ],
    pithas: ['Nakshi', 'Patishapta', 'Puli'],
  },

  {
    id:           'malpoa-kit',
    name:         'Malpoa Kit',
    purchaseType: 'monthly',
    category:     'subscription',
    available:    true,
    featured:     false,
    price:        650,
    servings:     4,
    tagline:      'Crisp edges, soft syrup-soaked center.',
    description:  'Everything you need to fry golden, fragrant malpoa at home and dip them in warm spiced date palm syrup.',
    badge:        'New',
    image:        '/images/kits/malpoa-kit.webp',
    includes: [
      { item: 'Fine rice & flour blend', note: 'Balanced for crisp edges and a tender bite' },
      { item: 'Khejur gur syrup base',   note: 'Pure Jessore date palm molasses for soaking' },
      { item: 'Cardamom & fennel',       note: 'Whole aromatic spices for the syrup' },
      { item: 'Recipe card',             note: 'Simple frying and soaking timing guide' },
    ],
    tips: [
      'Fry on medium-low heat so the center cooks through without darkening.',
      'Soak in warm, not boiling, gur syrup for 5 to 10 minutes.',
    ],
    pithas: ['Malpoa'],
  },

  {
    id:           'teler-pitha-kit',
    name:         'Teler Pitha Kit',
    purchaseType: 'monthly',
    category:     'subscription',
    available:    true,
    featured:     false,
    price:        600,
    servings:     4,
    tagline:      'Puffed, golden, and deeply comforting.',
    description:  'A home kit for classic Bengali teler pitha (pua pitha), made with stone-milled rice flour and rich Jessore khejur gur.',
    badge:        null,
    image:        '/images/kits/teler-pitha-kit.webp',
    includes: [
      { item: 'Atop rice flour',  note: 'Stone-ground for an airy puff in hot oil' },
      { item: 'Khejur gur',       note: 'Dark Jessore date palm jaggery for caramel sweetness' },
      { item: 'Fennel seeds',     note: 'Lightly crushed for traditional aroma' },
      { item: 'Recipe card',      note: 'Batter resting and frying temperature tips' },
    ],
    tips: [
      'Let the batter rest for at least 30 minutes before frying.',
      'Pour into the center of medium-hot oil and let each pitha puff naturally.',
    ],
    pithas: ['Teler Pitha'],
  },

  {
    id:           'pakon-pitha-kit',
    name:         'Pakon Pitha Kit',
    purchaseType: 'monthly',
    category:     'subscription',
    available:    true,
    featured:     false,
    price:        650,
    servings:     4,
    tagline:      'Hand-carved patterns, crisp and syrupy.',
    description:  'Traditional mug pakon pitha kit with lentil-rice dough blend, pure ghee, and carving sticks to shape classic winter designs.',
    badge:        null,
    image:        '/images/kits/pakon-pitha-kit.webp',
    includes: [
      { item: 'Moong & rice flour', note: 'Pre-blended for crisp, flaky layers' },
      { item: 'Khejur gur',         note: 'For a glossy, fragrant finishing glaze' },
      { item: 'Bamboo carving pick', note: 'Traditional tool for leaf and floral patterns' },
      { item: 'Recipe card',        note: 'Dough shaping and slow-frying guide' },
    ],
    tips: [
      'Knead the warm dough until smooth before pressing patterns.',
      'Fry slowly on low heat so the carved ridges turn crisp and golden.',
    ],
    pithas: ['Pakon Pitha'],
  },

  {
    id:           'teler-pakon-box',
    name:         'Teler & Pakon Combo Box',
    purchaseType: 'one-time',
    category:     'gift',
    available:    true,
    featured:     false,
    price:        950,
    servings:     6,
    tagline:      'Two golden fried classics in one box.',
    description:  'A festive box pairing crisp, hand-carved Pakon Pitha and puffed Teler Pitha ingredients for weekend gatherings or gifting.',
    badge:        'Combo Box',
    image:        '/images/kits/teler-pakon-box.webp',
    includes: [
      { item: 'Teler & Pakon flours', note: 'Separate pre-measured packs for both varieties' },
      { item: 'Jessore Khejur Gur',   note: 'Pure date palm jaggery for batter and syrup' },
      { item: 'Carving pick & spice', note: 'Bamboo pick plus fennel and cardamom' },
      { item: 'Gift box & card',      note: 'Packed in a sturdy box with dual recipe cards' },
    ],
    tips: [
      'Make the teler pitha batter first so it rests while you shape the pakon.',
      'Serve warm with afternoon tea.',
    ],
    pithas: ['Teler Pitha', 'Pakon Pitha'],
  },

  // ── Upcoming products ──────────────────────────────────────────────────────
  {
    id:           'chitoi-kit',
    name:         'Chitoi & Bhorta Duo',
    purchaseType: 'monthly',
    category:     'seasonal',
    available:    false,
    featured:     false,
    price:        750,
    servings:     4,
    tagline:      'Savory winter mornings.',
    description:  'Clay pan and stone-milled rice flour kit for round, spongy chitoi pitha, paired with three dry-fish and mustard bhortas.',
    badge:        'Coming in January',
    image:        '/images/kits/bhapa-starter.webp',
    includes: [
      { item: 'Coarse rice flour', note: 'For high-sponge chitoi crust' },
      { item: 'Shutki bhorta mix', note: 'Spicy dried Loitta blend' },
      { item: 'Mustard seed paste', note: 'Pungent cold-pressed mash' },
      { item: 'Clay pan (shora)',  note: 'Handmade earthen baking lid' },
    ],
    tips: [
      'Heat the clay lid until smoking before pouring the batter.',
      'Splash water around the rim for steam pockets.',
    ],
    pithas: ['Chitoi'],
  },
];

// Helper functions for easy consumption across components
export const getProductById = (id) => products.find((p) => p.id === id);
export const getFeaturedProduct = () => products.find((p) => p.featured) || products[0];
export const getByCategory = (cat) => products.filter((p) => p.category === cat && p.available);
export const availableProducts = products.filter((p) => p.available);
