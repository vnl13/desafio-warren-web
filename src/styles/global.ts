import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --text: #2f2f33;
    --pink: #e02b57;
    --darkGray: #2e2d33;
    --white: #ffffff;
    
  }

  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  a {
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;
    color: #000000;
  }

  button {
    cursor: pointer;
  }


`;
