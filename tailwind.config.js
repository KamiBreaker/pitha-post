/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Specified Rich Heritage Palette
        forest: {
          DEFAULT: '#173D2D',
          deep:    '#0F281E',
          light:   '#23533F',
          muted:   '#386B54',
        },
        terracotta: {
          DEFAULT: '#D95B35',
          light:   '#E57452',
          deep:    '#B54320',
          dark:    '#8E3215',
        },
        mustard: {
          DEFAULT: '#EBAF39',
          light:   '#F2C463',
          dark:    '#C4891C',
        },
        parchment: {
          DEFAULT: '#F5E7D0',
          light:   '#FAF2E4',
          dark:    '#EBDA melt',
          deep:    '#E0CCA8',
        },
        paddy: {
          DEFAULT: '#A8B878',
          light:   '#BDCC93',
          dark:    '#8B9B5C',
        },
        berry: {
          DEFAULT: '#783D48',
          light:   '#914F5B',
          dark:    '#5C2C35',
        },
        cream: '#FAF4EB',
        ink:   '#16241D',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        bengali: ['"Noto Serif Bengali"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.14em',
        stamp: '0.2em',
      },
      maxWidth: {
        editorial: '1360px',
        content:   '1240px',
      },
      boxShadow: {
        'stamp': '3px 3px 0px 0px #173D2D',
        'stamp-terra': '4px 4px 0px 0px #D95B35',
        'stamp-mustard': '4px 4px 0px 0px #EBAF39',
        'elevation': '0 20px 40px -15px rgba(23, 61, 45, 0.18)',
        'rich': '0 25px 50px -12px rgba(23, 61, 45, 0.25)',
      },
      backgroundImage: {
        'alpana-pattern': "radial-gradient(#173D2D 0.75px, transparent 0.75px), radial-gradient(#173D2D 0.75px, #F5E7D0 0.75px)",
      },
    },
  },
  plugins: [],
};
