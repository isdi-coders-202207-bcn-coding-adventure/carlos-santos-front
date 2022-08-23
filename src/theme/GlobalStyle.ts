import { createGlobalStyle } from "styled-components";
import OxaniumWoff from "../assets/fonts/oxanium-regular-webfont.woff";
import OxaniumWoff2 from "../assets/fonts/oxanium-regular-webfont.woff2";

export default createGlobalStyle`
  :root {
    --color-dark: #243342;
    --color-accent: #ffc700;
    --color-light: #c4c9cd;
    --font-primary: 'Oxanium', cursive;
  }

  @font-face {
    font-family: 'Oxanium';
    src: url(${OxaniumWoff2}) format('woff2'),
        url(${OxaniumWoff}) format('woff');
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: var(--color-light);
    font-family: var(--font-primary);
    background-color: var(--color-dark);
  }
`;
