export const COLORS = {
  white: {
    primary: "hsl(0deg 0% 100%)",
    secondary: "hsl(0deg 0% 50%)",
    tertiary: "hsl(0deg 0% 15%)",
  },
  black: {
    primary: "hsl(0deg 0% 0%)",
    secondary: "hsl(0deg 0% 1%)",
  },
  primary: "hsl(197deg 100% 43%)",
  secondary: "hsl(269deg 65% 51%)",
  tertiary: "hsl(53deg 100% 50%)",
  quaternary: "hsl(160deg 95% 36%)",
  quinary: "hsl(0deg 94% 53%)",
  senary: "hsl(13deg 94% 53%)",
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const BREAKPOINTS = {
  phoneMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};

export const LINKS = [
  { title: "home", href: "/" },
  { title: "about", href: "/about" },
  { title: "lab", href: "/lab" },
  { title: "contact", href: "/contact" },
];

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const TEXTS = ["hello", "xin chào"];
