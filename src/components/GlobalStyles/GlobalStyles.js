"use client";

import { COLORS, WEIGHTS } from "@/constants";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  #root, #__next {
    isolation: isolate;
  }
  
  html, body { 
    height: 100%;
  }

  html {
    --color-primary-text: ${COLORS.white["primary"]};
    --color-secondary-text: ${COLORS.white["secondary"]};
    --color-background: ${COLORS.black["primary"]};
    --color-box-background: ${COLORS.black["secondary"]};
    --color-border: ${COLORS.white["tertiary"]};
    --color-primary: ${COLORS.primary};
    --color-secondary: ${COLORS.secondary};
    --color-tertiary: ${COLORS.tertiary};
    --color-quaternary: ${COLORS.quaternary};
    --color-quinary: ${COLORS.quinary};
    --color-senary: ${COLORS.senary};

    --font-weight-normal: ${WEIGHTS.normal};
    --font-weight-medium: ${WEIGHTS.medium};
    --font-weight-semibold: ${WEIGHTS.semibold};
    --font-weight-bold: ${WEIGHTS.bold};
  }
`;

export default GlobalStyles;
