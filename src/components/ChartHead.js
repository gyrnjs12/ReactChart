import React from 'react';
import styled from 'styled-components';
import { useChartState } from './Provider/ChartProvider.component';

const ChartHeadBlock = styled.div`
  padding-left: 32px;
  padding-right: 32px;

  .date {
    display: flex;
    width: 350px;
    margin: 0 auto;
    font-size: 36px;
    color: #343a40;
    margin-bottom: 25px;
  }
  .chart {
    font-size: 48px;
    font-weight: bold;
    display: flex;
    align-items: flex-start;
  }
  .chart-name {
    padding-top: 36px;
    height: 100px;
  }
  .chart-img {
    padding-top: 36px;
    background-size: 142px 46px;
    width: 142px;
    height: 46px;
  }
`;

const HoursText = styled.div`
  margin-left: 10px;
  color: ${({ color, theme }) => theme.colors[color]};
  /* 이거는 theme.colors.[color] state에 따라 color가 바뀜 */
`;

const ChartHeadLine = styled.div`
  border-bottom: 1px gray solid;
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: 32px;
`;

function ChartHead({ children }) {
  const today = new Date();
  const dateString = today.toLocaleDateString();
  const hours = today.getHours();
  const { chart } = useChartState();
  console.log(chart, '차트상태');
  return (
    <ChartHeadBlock img={chart}>
      <div className="chart">
        <img className="chart-img" alt="로고" src={`/img/${chart}_logo.png`} />
        <div className="chart-name"> CHART</div>
      </div>
      <div className="date">
        <span className="today">{dateString} </span>
        <HoursText color={chart}>
          {`${hours < 10 ? `0${hours}` : hours} `}: 00
        </HoursText>
      </div>
      <ChartHeadLine />
    </ChartHeadBlock>
  );
}

export default React.memo(ChartHead);
