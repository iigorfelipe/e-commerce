import { fontFamily } from "tailwindcss/defaultTheme";
import {
  BREAKPOINTS,
  COLORS,
  HEADER_PADDING_X,
  MAIN_PADDING_X,
  UNDO_MAIN_PADDING_X,
  TYPOGRAPHY,
} from "./src/styles/design-system/tokens/index";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: BREAKPOINTS,
    extend: {
      fontFamily: {
        sans: ["Raleway", ...fontFamily.sans],
      },
      spacing: {
        "container-px": MAIN_PADDING_X,
        "header-px": HEADER_PADDING_X,
        "undo-container-px": UNDO_MAIN_PADDING_X,
      },
      fontSize: TYPOGRAPHY,
      colors: {
        theme: COLORS,
      },
    },
  },
  plugins: [],
};
