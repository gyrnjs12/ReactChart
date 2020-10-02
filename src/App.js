import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/Nav";
import ChartTemplate from "./components/ChartTemplate";
import ChartHead from "./components/ChartHead";
import useAsync from "./useAsync";
import axios from "axios";

async function getMelon() {
  const response = await axios.get("http://localhost:3002/chart/melon");
  return response.data;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #e9ecef;
  }
  `;
function App() {
  const [state, refetch] = useAsync(getMelon, []);
  const { loading, data, error } = state;
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ChartTemplate>
        <ChartHead />
      </ChartTemplate>
    </>
  );
}

export default App;
