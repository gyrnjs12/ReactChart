import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/Nav";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #e9ecef;
  }
  `;
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar>안녕하세요</NavBar>
    </>
  );
}

export default App;
