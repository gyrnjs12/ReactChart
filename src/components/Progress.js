import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressBlock = styled.div`
  position: absolute;
  left: 45%;
  top: 30%;
  width: 60px;
  height: 60px;
  color: ${({ color }) => color || 'white'};
`;
function Progress() {
  const themeContext = useContext(ThemeContext);
  return (
    <ProgressBlock color={themeContext.colors.MELON}>
      <CircularProgress size="60px" />
    </ProgressBlock>
  );
}

export default Progress;
