/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052CC',
          blueDark: '#003D99',
          blueLight: '#2563EB',
          blueGlow: 'rgba(0, 82, 204, 0.25)',
          yellow: '#FFD60A',
          yellowDark: '#E6C200',
          black: '#1A1A1A',
          card: '#FFFFFF',
          border: '#E2E8F0',
          bg: '#F8FAFC',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px -3px rgba(0, 82, 204, 0.25)',
        'blue-lg': '0 10px 30px -8px rgba(0, 82, 204, 0.35)',
        'card-soft': '0 4px 20px -2px rgba(0, 82, 204, 0.05)',
      },
    },
  },
  plugins: [],
}
