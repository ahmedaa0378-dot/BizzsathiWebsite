/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          bright: '#c8ee44',
          dark: '#a3c428',
          text: '#8fb02e',
          glow: 'rgba(200, 238, 68, 0.15)',
        },
        dark: '#050505',
        section: '#0a0a0a',
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#52525b',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'card-glow': '0 0 40px rgba(200, 238, 68, 0.1)',
        'card-glow-hover': '0 0 40px rgba(200, 238, 68, 0.25)',
      },
      backgroundImage: {
        'section-glow': 'radial-gradient(ellipse at 50% 0%, rgba(200,238,68,0.06) 0%, transparent 60%)',
        'card-reflection': 'linear-gradient(to top, rgba(200,238,68,0.04) 0%, transparent 40%)',
      },
    },
  },
  plugins: [],
}
