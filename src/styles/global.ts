import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;
    --background: #000005;
    --background-secondary: #36373F;
    --shape: #202024;

    --gray-50: #CCCCCC;
    --gray-100: #8F9097;
    --gray-400: #6B6D74;
    --gray-800: #43444A;

    --purple-100: #A089FB;
    --purple-400: #5636D3;

    --green-400: #49EAC4;

    --red-400: #EA4F6D;
    --red-800: #C61D3E;
  }

  body {
    color: var(--white);
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat';
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export { GlobalStyle };
