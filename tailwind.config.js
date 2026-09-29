/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          dark: '#081B33',
        },
        gold: {
          DEFAULT: '#C08A2E',
          light: '#D9A94E',
        },
        teal: '#2E6E7E',
        success: '#2F6E4E',
        surface: {
          DEFAULT: '#F7F7F5',
          alt: '#EEF1F4',
        },
        ink: {
          DEFAULT: '#1B1F23',
          muted: '#5A6472',
        },
        border: '#D9DEE3',
      },
      fontFamily: {
        heading: ['Sora', 'Inter Tight', 'sans-serif'],
        body: ['Inter', 'Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
