import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const ChartTemplateBlock = styled.div`
  width: ${({ isPc }) => (isPc ? `1200px` : `768px`)};
  height: 100vh;

  margin-left: 270px;
  margin-right: 270px;

  position: relative;
  background: #f6f6f6;

  display: flex;
  flex-direction: column;
`;

function ChartTemplate({ children }) {
  const isPc = useMediaQuery({
    query: '(min-width: 769px)',
  });
  return <ChartTemplateBlock isPc={isPc}>{children}</ChartTemplateBlock>;
}

export default React.memo(ChartTemplate);
