// ─── Individual Pitha Varieties ───────────────────────────────────────────────
// Editorial data for the three classic Bengali winter pithas.
// Used by OurStory, Home ("three lovely ways") and any future pitha guide pages.
// Separate from product kit data — a kit may contain multiple pitha varieties.

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
      'Keep the batter thin — whisk with milk until it pours easily.',
      'Cook on a low flame so the crêpe stays pale and doesn\'t colour too fast.',
    ],
    includedIn: ['winter-trio', 'gift-a-box'],
  },
  {
    id:       'puli',
    name:     'Puli',
    subtitle: 'Little sweet parcels',
    tagline:  'Half-moon dumplings, sealed with care.',
    description:
      "Half-moon dumplings sealed tightly around a coconut-gur filling — " +
      "either boiled in sugar syrup or fried until golden. " +
      "Both methods use the same kit. The name means 'small parcel' and the shape says everything.",
    image:    '/images/pitha/puli-pitha.webp',
    tips: [
      'Seal the edges firmly — a little water on your fingertip helps.',
      'For boiled puli, the syrup should be gently simmering, not rolling.',
    ],
    includedIn: ['winter-trio', 'gift-a-box'],
  },
];

export const getPithaById = (id) => pithas.find((p) => p.id === id);
