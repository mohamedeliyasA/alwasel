/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#1B3D8C', light: '#2451AE', dark: '#122B6B' },
        blue:  { DEFAULT: '#2196C4', light: '#4FB8E0', dark: '#1677A0' },
        ink:   '#0F1F3D',
        muted: '#5A6A85',
        border:'#DDE3EE',
        bg:    { DEFAULT: '#F8FAFD', warm: '#EEF2F9' },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
