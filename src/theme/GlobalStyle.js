import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  
  *, *::before, *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    box-sizing: border-box;
    /* font-size: 62.5%; */
  }
/*   
  body {
    font-size: 1.6rem;
    font-family: "Merriweather", serif;
  } */

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  hr {
    margin: 0;
    padding: 0;
    font-size: 100%;
    /* font: inherit; */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
