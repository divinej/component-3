import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#19202D',
        blue: '#48556A',
        'blue-500': '#48556AB3',
        'light-purple': '#A775F1',
        purple: '#733FC8',
        white: '#ffffff',
        'light-blue': '#ECF2F8',
        gray: '#CFCFCF',
      },
      fontFamily: {
        'main': ['Barlow Semi Condensed', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8125rem',
        xs: '0.6875rem',
      },
      borderRadius: {
        'xl': "0.625rem"
      },
      maxWidth: {
        'xl': "69.375rem"
      },
      padding: {
        20: "4.5rem",
      },
      zIndex: {
        '1': '1',
      },
      boxShadow: {
        '2xl': '40px 60px 50px -47px #48556A40',
      },
    },
  },
  plugins: [],
};
export default config;
