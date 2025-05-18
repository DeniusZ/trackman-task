import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  --color-white: #ffffff;

  --color-gray-50: #fafafa;
  --color-gray-100: #f3f3f3;
  --color-gray-200: #e0e0e0;
  --color-gray-300: #cccccc;
  --color-gray-400: #757575;
  --color-gray-500: #666666;
  --color-gray-600: #2c2c2c;
  --color-gray-700: #1e1e1e;

  --color-brown-400: #975102bf;

  --color-orange-300: #ec691a;
  --color-orange-400: #cc570f;

  --color-green-50: #ebffee;
  --color-green-500: #14ae5c;

  --color-red-50: #fee9e7;
  --color-red-500: #ec221f;


  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-md: 1.125rem;
  --font-size-lg: 1.75rem;
}

body {
  font-family: "Inter", sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size: var(--font-size-base);
  letter-spacing: 0.25px;

  color: #1E1E1E
}
`;

export default GlobalStyles;
