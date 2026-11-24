/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Refined Bengali Heritage Food-Brand Palette
        forest: {
          DEFAULT: '#173D2D', // Primary brand deep forest green
          deep:    '#0F281E',
          light:   '#22533E',
          muted:   '#346851',
        },
        terracotta: {
          DEFAULT: '#B94F35', // Burnt terracotta accent
          light:   '#C96349',
          deep:    '#9B3F28',
          dark:    '#7D2E1A',
        },
        mustard: {
          DEFAULT: '#DDAE42', // Muted mustard highlight
          light:   '#E9BD58',
          dark:    '#B58B2A',
        },
        parchment: {
          DEFAULT: '#E9D2AD', // Primary background: warm parchment
          light:   '#F5EBDD', // Secondary background: muted cream
          deep:    '#DEC396',
          dark:    '#CFB17F',
        },
        cream: {
          DEFAULT: '#F5EBDD', // Muted cream
          light:   '#FAF4EB',
          dark:    '#EBDCC8',
        },
        brown: {
          DEFAULT: '#2E1F18', // Warm dark brown text / accent
          dark:    '#221610',
          muted:   '#4A372D',
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
        ink:   '#173D2D',
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
        'stamp-terra': '4px 4px 0px 0px #B94F35',
        'stamp-mustard': '4px 4px 0px 0px #DDAE42',
        'elevation': '0 20px 40px -15px rgba(23, 61, 45, 0.18)',
        'rich': '0 25px 50px -12px rgba(23, 61, 45, 0.25)',
      },
      backgroundImage: {
        'alpana-pattern': "radial-gradient(#173D2D 0.75px, transparent 0.75px), radial-gradient(#173D2D 0.75px, #E9D2AD 0.75px)",
      },
    },
  },
  plugins: [],
};
