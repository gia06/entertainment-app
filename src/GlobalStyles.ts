import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Outfit', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
    /* overflow: hidden; */
  }
`;

export default GlobalStyles;
