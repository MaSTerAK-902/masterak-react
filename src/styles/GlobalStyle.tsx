import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --white-bg: #fafafa;
    --dark-font: #6d6d6d;
    --white-font: #f7f5f5;
    --gray-shadow: #dfdfdf;

  }
  html{
    font-size: 16px;
    font-family: "游ゴシック", "ヒラギノ角ゴ Pro W3", "メイリオ", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
`
export default GlobalStyles
