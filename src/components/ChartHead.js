import React, { useContext } from "react";
import styled from "styled-components";
import melon_logo from "./img/melon_logo.png";
import ChartContext from "../context/context";

const ChartHeadBlock = styled.div`
  padding-left: 32px;
  padding-right: 32px;

  .date {
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

  .hours {
    color: #02cd3b;
  }
`;

const ChartHeadLine = styled.div`
  border-bottom: 1px gray solid;
  margin-left: -32px;
  margin-right: -32px;
  margin-bottom: 32px;
`;

function ChartHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString();
  const hours = today.getHours();
  const value = useContext(ChartContext);
  console.log("CHARTHEAD", value);

  return (
    <ChartHeadBlock>
      <div className="chart">
        <img className="chart-img" alt="melon" src={melon_logo} />
        <div className="chart-name"> CHART</div>
      </div>
      <div className="date">
        <span className="today">{dateString} </span>
        <span className="hours">
          {`${hours < 10 ? `0${hours}` : hours} `}: 00
        </span>
      </div>
      <ChartHeadLine />
    </ChartHeadBlock>
  );
}

export default React.memo(ChartHead);
