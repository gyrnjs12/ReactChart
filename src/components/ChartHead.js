import React from "react";
import styled from "styled-components";
import melon_logo from "./img/melon_logo.png";
const ChartHeadBlock = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 204px;

  .date {
    width: 300px;
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
`;

const ChartHeadLine = styled.div`
  border-bottom: 1px gray solid;
  margin-left: -32px;
  margin-right: -32px;
`;

function ChartHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString();
  const hours = today.getHours();

  return (
    <ChartHeadBlock>
      <div className="chart">
        <img className="chart-img" alt="melon" src={melon_logo} />
        <div className="chart-name"> CHART</div>
      </div>
      <div className="date">
        <span className="today">{dateString} </span>
        <span className="hours">
          {`${hours < 10 ? `0${hours}` : hours} `}:00
        </span>
      </div>
      <ChartHeadLine />
    </ChartHeadBlock>
  );
}

export default ChartHead;
