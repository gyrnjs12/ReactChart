import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/Nav";
import ChartTemplate from "./components/ChartTemplate";
import ChartHead from "./components/ChartHead";
import ChartList from "./components/ChartList";

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
      <NavBar />
      <ChartTemplate>
        <ChartHead />
        <ChartList />
      </ChartTemplate>
    </>
  );
}

export default App;
