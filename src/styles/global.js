import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    box-sizing: border-box;
  }
  
  body{
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }
  
  section{
    display: flex;
    width: 1200px;
  }
`;
