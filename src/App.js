import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/Nav";
import ChartTemplate from "./components/ChartTemplate";
import ChartHead from "./components/ChartHead";
import ChartList from "./components/ChartList";
import ChartProvider from "./components/Provider/ChartProvider.component";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #e9ecef;
  }
  `;
// 사용하고자 하는 자식 컴포넌트를 밖에서 <Provider>로 감싸주기
function App() {
  return (
    <>
      <GlobalStyle />
      <ChartProvider>
        <NavBar />
        <ChartTemplate>
          <ChartHead />
          <ChartList />
        </ChartTemplate>
      </ChartProvider>
    </>
  );
}

export default App;

// Context API를 사용해서 상태관리 필요할듯..
// Context -> state저장소를 만들어서 그곳에서 상태를 관리함, 어떤 컴포넌트에서든 저장소에 접근해서 사용가능
