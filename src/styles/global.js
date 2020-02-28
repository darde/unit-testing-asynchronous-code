import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }
`;