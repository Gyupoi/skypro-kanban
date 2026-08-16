import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
  }

  body {
    margin: 0;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  .container {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }

    100% {
      height: auto;
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
