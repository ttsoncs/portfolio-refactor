export const COLORS = {
  white: {
    primary: "hsl(0deg 0% 100%)",
    secondary: "hsl(0deg 0% 50%)",
    tertiary: "hsl(0deg 0% 50%)",
  },
  black: {
    primary: "hsl(0deg 0% 5%)",
    secondary: "hsl(0deg 0% 5%)",
  },
  primary: "hsl(220deg 100% 50%)",
  secondary: "hsl(317deg 100% 84%)",
  tertiary: "hsl(50deg 100% 52%)",
  quaternary: "hsl(135deg 63% 50%)",
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
