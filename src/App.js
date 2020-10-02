import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/Nav";
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
    </>
  );
}

export default App;
