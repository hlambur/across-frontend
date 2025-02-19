import React from "react";
import { Global, css } from "@emotion/react";
import { reset } from "./reset";
import { COLORS, QUERIES } from "utils";

export const typography = css`
  /* only take latin chars to reduce bundle size */
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: url("/fonts/Barlow-Regular.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
    src: url("/fonts/Barlow-Bold.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`;
const variables = css`
  :root {
    /* COLORS */
    --color-gray: hsl(${COLORS.gray[500]});
    --color-gray-300: hsla(${COLORS.gray[300]});
    --color-gray-200: hsla(${COLORS.gray[200]});
    --color-gray-100: hsla(${COLORS.gray[100]});
    --color-white: hsl(${COLORS.white});
    --color-black: hsl(${COLORS.black});
    --color-primary: hsl(${COLORS.primary[500]});
    --color-primary-dark: hsl(${COLORS.primary[700]});
    --color-secondary: hsl(${COLORS.secondary[500]});
    --color-error: hsl(${COLORS.error[500]});
    --color-error-light: hsl(${COLORS.error[300]});
    --color-uma-red: hsl(${COLORS.umaRed});
    --color-purple: hsl(${COLORS.purple});
    --color-primary-transparent: hsla(${COLORS.primary[500]} / 0.4);
    --color-black-transparent: hsla(${COLORS.black} / 0.75);
    --color-white-transparent: hsla(${COLORS.white} / 0.75);
    --color-gray-transparent: rgba(45, 46, 51, 0.1);

    /*
    Silence the warning about missing Reach Dialog styles
  */
    --reach-dialog: 1;

    /* 
    Keep a consistent width between the middle section and the headers
  */
    --central-content: 500px;
    --header-height: 60px;
    @media ${QUERIES.tabletAndUp} {
      --header-height: 100px;
    }
  }
`;

const globalStyles = css`
  ${reset};
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: "Barlow", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }
  html,
  body {
    height: 100%;
  }
  body {
    background-color: var(--color-gray);
    color: var(--color-white);
  }
  #root {
    height: 100%;
    isolation: isolate;
  }
  // iphone query
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    select,
    select:focus,
    textarea,
    textarea:focus,
    input,
    input:focus {
      font-size: 16px;
    }
  }

  ${typography}
  ${variables}
`;

const GlobalStyles = () => <Global styles={globalStyles} />;
export default GlobalStyles;
