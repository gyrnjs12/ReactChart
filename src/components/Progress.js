import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProgressBlock = styled.div`
  position: absolute;
  left: 45%;
  top: 30%;
  width: 60px;
  height: 60px;
`;
function Progress() {
  return (
    <ProgressBlock>
      <CircularProgress size="60px" />
    </ProgressBlock>
  );
}

export default Progress;
