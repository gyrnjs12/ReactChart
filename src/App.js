import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import Home from './components/Home';
import { ChartProvider } from './components/Provider/ChartProvider.component';
import theme from './components/theme/theme';
import NanumSquare from './Fonts/NanumSquareOTF_acR.otf';
import Test from './components/Test';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'NanumSquare';
    src: url(${NanumSquare}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  body {
    font-family: 'NanumSquare';
    margin: 0;
    background: #eeeeee;
  }
`;
// 사용하고자 하는 자식 컴포넌트를 밖에서 <Provider>로 감싸주기
function App() {
  return (
    <>
      <ChartProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Home />
          <Test />
        </ThemeProvider>
      </ChartProvider>
    </>
  );
}

export default App;
