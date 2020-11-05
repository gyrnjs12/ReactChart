import React from 'react';
import styled from 'styled-components';

const NewSongTempleteBlock = styled.div`
  min-width: 1600px;
  height: 400px;
  display: flex;
  justify-content: center;
`;

function NewSongTemplete({ children }) {
  return <NewSongTempleteBlock>{children}</NewSongTempleteBlock>;
}

export default NewSongTemplete;
