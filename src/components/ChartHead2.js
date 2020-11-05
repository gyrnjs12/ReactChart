import React from 'react';
import styled from 'styled-components';
import NewSongTemplete from './NewSongTemplete';
import NewSong from './NewSong';
import { useChartState } from './Provider/ChartProvider.component';

const ChartHeadBlock = styled.div`
  width: 100vw;
  height: 565px;
  background-image: url('https://img2.quasarzone.co.kr/img/data/img/editor/1903/1903___1093872597.jpg');
`;

const TextBlock = styled.div`
  display: flex;
  width: auto;
  height: auto;
  padding: 0 16.5vw;
  .chart-img {
    padding-top: 91px;
    background-size: 142px 46px;
    width: 142px;
    height: 46px;
  }
`;

const ChartText = styled.div`
  font-size: 45px;
  font-weight: bold;
  color: #ffffff;
  padding-top: 90px;
`;

const Line = styled.div`
  width: 67vw;
  margin: 0 16.5vw;
  margin-bottom: 20px;
  border: 1px solid #eeeeee;
`;
function ChartHead2({ children, text }) {
  const { chart } = useChartState();
  return (
    <ChartHeadBlock>
      <TextBlock>
        <ChartText>REAL TIME </ChartText>
        <p> a</p> {/* 띄어쓰기 */}
        <img className="chart-img" alt="로고" src={`/img/${chart}_logo.png`} />
        <p> a</p> {/* 띄어쓰기 */}
        <ChartText> CHART </ChartText>
      </TextBlock>
      <Line />
      <NewSongTemplete>
        <NewSong />
      </NewSongTemplete>
    </ChartHeadBlock>
  );
}

export default ChartHead2;
