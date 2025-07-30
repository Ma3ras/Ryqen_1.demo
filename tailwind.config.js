/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#e9ecef',
        },
        text: {
          primary: '#212529',
          secondary: '#6c757d',
          alternative: '#ffffff',
        },
        border: {
          primary: '#dee2e6',
          secondary: '#adb5bd',
        },
        accent: {
          primary: '#007bff',
          secondary: '#6c757d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    }
  }
} 