import { createGlobalStyle } from 'styled-components';
import colors from '../components/colors.json';

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
    background-color: ${colors.colors[5].hex};

    font-family: 'FOT-Rodin', sans-serif;
    position: fixed;
    width: 100%;

    &:before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      background-image: 
        linear-gradient(${colors.colors[2].hex}20 1px, transparent 1px),
        linear-gradient(90deg, ${colors.colors[2].hex}20 1px, transparent 1px);
      background-size: 5px 5px;
    }
  }
`;

export default GlobalStyles;