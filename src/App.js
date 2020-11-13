import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import reset from 'styled-reset';
import NavBar from './components/Nav';
import ChartTemplate from './components/ChartTemplate';
import ChartHead2 from './components/ChartHead2';
import ChartHead1 from './components/ChartHead';
import ChartList from './components/ChartList';
import { ChartProvider } from './components/Provider/ChartProvider.component';
import theme from './components/theme/theme';
import NanumSquare from './Fonts/NanumSquareOTF_acR.otf';

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
  const isBig = useMediaQuery({
    query: '(min-width: 1790px)',
  });
  return (
    <>
      <ChartProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NavBar />
          {isBig ? <ChartHead2 /> : <ChartHead1 />}
          <ChartTemplate>
            <ChartList />
          </ChartTemplate>
        </ThemeProvider>
      </ChartProvider>
    </>
  );
}

export default App;
