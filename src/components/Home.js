import React from 'react';
import NavBar from './Nav';
import ChartTemplate from './ChartTemplate';
import ChartHead2 from './ChartHead2';
import ChartHead1 from './ChartHead';
import ChartList from './ChartList';
import { useMediaQuery } from 'react-responsive';

function Home() {
  const isBig = useMediaQuery({
    query: '(min-width: 1790px)',
  });
  return (
    <>
      <NavBar />
      {isBig ? <ChartHead2 /> : <ChartHead1 />}
      <ChartTemplate>
        <ChartList />
      </ChartTemplate>
    </>
  );
}

export default Home;
