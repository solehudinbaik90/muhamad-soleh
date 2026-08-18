import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    screens: {
      sm: "380px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      backgroundImage: {
        'bg-img': "url('/assets/media/black-bg.png')", 
      },
      colors: {
        theme: "rgb(255 1 79)",
        card: "rgb(29 28 34)",
        btn: "rgb(41 40 45)",
        text: "rgb(196 207 222)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        swiper: ["var(--font-swiper-icons)", "sans-serif"],
      },
    },
  },
  plugins: [],
};


export default withMT(config);
