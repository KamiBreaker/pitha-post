/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          light: '#FDFBF7',
          dark: '#F3EFE6',
        },
        'pale-green': {
          DEFAULT: '#EDF2E8',
          light: '#F4F7F0',
          dark: '#E2EAD9',
        },
        forest: {
          DEFAULT: '#163323',
          deep: '#0F2418',
          light: '#245237',
          muted: '#3C6B4E',
        },
        peach: {
          DEFAULT: '#FAF0E6',
          light: '#FCF6EE',
          dark: '#F5E4D4',
        },
        terracotta: {
          DEFAULT: '#BA673B',
          light: '#CB7A4F',
          dark: '#9F532B',
        },
        gold: {
          DEFAULT: '#D4931A',
          light: '#E6A833',
          dark: '#B0750C',
        },
        'warm-gray': {
          DEFAULT: '#6B6255',
          light: '#8C8375',
          dark: '#453E34',
        },
        ink: '#1A1E1B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.12em',
      },
      maxWidth: {
        content: '1280px',
        narrow: '980px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(22, 51, 35, 0.06)',
        'lift': '0 12px 32px -4px rgba(22, 51, 35, 0.12)',
        'float': '0 20px 40px -8px rgba(22, 51, 35, 0.16)',
      },
    },
  },
  plugins: [],
};
