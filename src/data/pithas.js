// ─── Individual Pitha Varieties ───────────────────────────────────────────────
// Editorial data for the classic Bengali winter pithas.
// Used by OurStory, Home and any future pitha guide pages.

export const pithas = [
  {
    id:       'bhapa',
    name:     'Bhapa',
    subtitle: 'Soft and steamy',
    tagline:  'The original winter comfort.',
    description:
      "Steamed rice-flour dumplings filled with khejur gur and grated coconut. " +
      "The name means 'steamed' in Bengali. Made in a layered mould, it is soft, " +
      "fragrant and deeply seasonal.",
    image:    '/images/pitha/bhapa-pitha.webp',
    tips: [
      'Add water gradually and rub the rice flour into soft crumbs.',
      'Letting the crumbs sit for a few minutes keeps each layer light and airy.',
    ],
    includedIn: ['bhapa-starter', 'winter-trio', 'gift-a-box'],
  },
  {
    id:       'patishapta',
    name:     'Patishapta',
    subtitle: 'Thin and golden',
    tagline:  'Delicate crêpes, sweet within.',
    description:
      "Thin rice-flour crêpes rolled around a soft coconut filling. " +
      "The batter is whisked with milk, poured thin, and folded over the filling while still warm. " +
      "Quick to make and even quicker to disappear.",
    image:    '/images/pitha/patishapta.webp',
    tips: [
      'Keep the batter thin: whisk with milk until it pours easily.',
      'Cook on a low flame so the crêpe stays pale and does not colour too fast.',
    ],
    includedIn: ['winter-trio', 'gift-a-box'],
  },
  {
    id:       'puli',
    name:     'Puli',
    subtitle: 'Little sweet parcels',
    tagline:  'Half-moon dumplings, sealed with care.',
    description:
      "Half-moon dumplings sealed tightly around a coconut-gur filling, " +
      "either boiled in milk or sugar syrup, or fried until golden. " +
      "Both methods use the same kit.",
    image:    '/images/pitha/puli-pitha.webp',
    tips: [
      'Seal the edges firmly; a little water on your fingertip helps.',
      'For boiled puli, the syrup should be gently simmering, not rolling.',
    ],
    includedIn: ['winter-trio', 'gift-a-box'],
  },
  {
    id:       'malpoa',
    name:     'Malpoa',
    subtitle: 'Syrup-soaked and golden',
    tagline:  'Crisp edges with a tender, fragrant center.',
    description:
      "Golden rice-and-flour pancakes fried until crisp at the rim and soaked in warm, " +
      "cardamom-scented khejur gur syrup. Rich, aromatic, and a staple at winter feasts.",
    image:    '/images/pitha/malpoa.webp',
    tips: [
      'Fry on medium-low heat so the center cooks through without darkening too fast.',
      'Soak in warm, not boiling, gur syrup for 5 to 10 minutes so they stay tender.',
    ],
    includedIn: ['malpoa-kit'],
  },
  {
    id:       'teler-pitha',
    name:     'Teler Pitha',
    subtitle: 'Puffed and caramelized',
    tagline:  'Deep-fried winter comfort sweetened with khejur gur.',
    description:
      "Also known as pua pitha, this deep-fried batter of stone-milled rice flour and dark " +
      "date palm jaggery puffs up into a soft, domed cushion with crisp edges.",
    image:    '/images/pitha/teler-pitha.webp',
    tips: [
      'Let the batter rest for at least 30 minutes so the rice flour absorbs moisture evenly.',
      'Pour into the center of medium-hot oil and let each pitha rise and puff naturally.',
    ],
    includedIn: ['teler-pitha-kit', 'teler-pakon-box'],
  },
  {
    id:       'pakon-pitha',
    name:     'Pakon Pitha',
    subtitle: 'Carved and flaky',
    tagline:  'Hand-patterned lentil-rice pastry finished in syrup.',
    description:
      "A traditional mug pakon dough made with moong dal and rice flour, pressed and carved " +
      "with leaf or floral patterns using a bamboo pick, then slow-fried and glazed in gur syrup.",
    image:    '/images/pitha/pakon-pitha.webp',
    tips: [
      'Knead the warm dough until completely smooth before carving your patterns.',
      'Fry slowly on low heat so the carved ridges turn crisp and golden all the way through.',
    ],
    includedIn: ['pakon-pitha-kit', 'teler-pakon-box'],
  },
];

export const getPithaById = (id) => pithas.find((p) => p.id === id);
