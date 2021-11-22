import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    paddin:0;
    box-sizing: border-box;
  }

  ::root{
    --primary:#ff8f00;
    --secundary:#e65100;
    --darker:#e53935;
  }

  body {
    color: #FFFFFF;
    font-family: Verdana;
    background-color: #25252c;
    max-height: 100vh;
  }
`;

export default GlobalStyle;