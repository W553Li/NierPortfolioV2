import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FOT-Rodin';
    src: url('/fonts/FOTRodinProL.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'FOT-Rodin', sans-serif;
    position: fixed;
    width: 100%;
  }
`;

export default GlobalStyles;