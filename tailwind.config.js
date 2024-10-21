/**import type { Config } from "tailwindcss"; */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          loadingLine: {
            'loading-line': 'loadingLine 2s linear infinite',
        },
    
      animation: {
        fade: 'fade 3s infinite', // Animação de 3 segundos em loop
      },
    },
  },
      },

  plugins: [],
};
