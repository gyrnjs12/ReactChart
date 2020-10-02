import React from "react";
import styled from "styled-components";

const ChartTemplateBlock = styled.div`
  width: 1200px;
  height: 100vh;

  margin-left: 270px;
  margin-right: 270px;

  position: relative;
  background: #f6f6f6;

  display: flex;
  flex-direction: column;
`;

function ChartTemplate({ children }) {
  return <ChartTemplateBlock>{children}</ChartTemplateBlock>;
}

export default ChartTemplate;
