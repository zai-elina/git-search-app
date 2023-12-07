import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('../public/fonts/Roboto-Regular.ttf');
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('../public/fonts/Roboto-Bold.ttf');
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('../public/fonts/Roboto-Black.ttf');
    font-style: normal;
    font-weight: 900;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url('../public/fonts/Roboto-Medium.ttf');
    font-style: normal;
    font-weight: 500;
  }
  body {
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0em;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background-color:#E8EAEE;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
  }
`;
export const Container = styled.div`
  margin-top: 72px;
  padding-left: calc(50% - 544px);
  padding-right: calc(50% - 544px);
`;
