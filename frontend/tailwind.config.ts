import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#82a3ff',
          400: '#4b7aff',
          500: '#1e40af', // primary
          600: '#1a3795',
          700: '#152e7a',
          800: '#112460',
          900: '#0c1a46',
        },
      },
    },
  },
  plugins: [],
};
export default config;
