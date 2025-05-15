import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;

  color: #1E1E1E
}
`;

export default GlobalStyles;
