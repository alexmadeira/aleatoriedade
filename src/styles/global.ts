import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body {
    background:#000000;
    color: ${props => props.theme.colors.text};
    font-family: 'Open Sans', sans-serif;
    height:100vh;
  }
  #__next{
    display:flex;
    height:100%;
  }
`
