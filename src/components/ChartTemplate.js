import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const ChartTemplateBlock = styled.div`
  width: ${({ isMobile }) => (isMobile ? `100vw` : `67vw`)};
  height: 100vh;
  margin-left: ${({ isMobile }) => (isMobile ? `0px` : `16.5vw`)};
  position: relative;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
`;

function ChartTemplate({ children }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 1240px)',
  });
  return (
    <ChartTemplateBlock isMobile={isMobile}>{children}</ChartTemplateBlock>
  );
}

export default React.memo(ChartTemplate);
