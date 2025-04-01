import { createGlobalStyle } from 'styled-components'

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

  body {
    font-family: 'FOT-Rodin', sans-serif;
  }
`

export default GlobalStyles