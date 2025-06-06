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
      fontSize: {
        logo: TYPOGRAPHY.logo,
        "body-sm-700": TYPOGRAPHY["body-sm-700"],
        "body-base-500": TYPOGRAPHY["body-base-500"],
        "title-base-500": TYPOGRAPHY["title-base-500"],
        "title-lg-500": TYPOGRAPHY["title-lg-500"],
        "title-lg-700": TYPOGRAPHY["title-lg-700"],
        "title-xl-700": TYPOGRAPHY["title-xl-700"],
      },
      colors: {
        theme: {
          "orange-brand": COLORS["orange-brand"],
          "gray-dark": COLORS["gray-dark"],
          "purple-brand": COLORS["purple-brand"],
          "gray-50": COLORS["gray-50"],
          black: COLORS.black,
          "gray-60": COLORS["gray-60"],
          "gray-brand": COLORS["gray-brand"],
        },
      },
    },
  },
  plugins: [],
};
