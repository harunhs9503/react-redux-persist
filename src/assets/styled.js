import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none!important;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    background: gray;
    overflow-x: hidden;
  }
`;

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: gray;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1300;
  overflow: hidden;
  ${(props) => (props.state ? `
    transform: translate(0%, 0%);
    transition: all 0.5s ease;
    ` : `
    transform: translate(0%, -100%);
    transition: all 0.5s ease;
  `)}
`;

export const DashboardWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Dashbox = styled.div`
  background: rgba(0,0,0,0.4);
  position: relative;
  padding: 25px 35px;
  border-radius: 5px;
  width: 450px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h4 {
      font-size: 25px;
      font-weight: 400;
      color: white;
      padding-bottom: 5px;
      > span {
        font-weight: 800;
      }
    }
    > button {
      background-color: black!important;
      color: white!important;
      text-transform: none!important;
      padding: 5px 20px!important;
      box-shadow: none!important;
      margin-top: 20px;
    }
  }
`;

export const LoginBox = styled.div`
  background: rgba(0,0,0,0.4);
  position: relative;
  padding: 25px 35px;
  border-radius: 5px;
  width: 450px;
  .formArea {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h4 {
      font-size: 25px;
      font-weight: 400;
      color: white;
      padding-bottom: 5px;
      > span {
        font-weight: 800;
      }
    }
    > button {
      background-color: black!important;
      color: white!important;
      text-transform: none!important;
      padding: 5px 20px!important;
      box-shadow: none!important;
      margin-top: 10px;
    }
    > p {
      color: white;
    }
  }
`;
