import React from 'react';
import styled from 'styled-components';

const NewSongTempleteBlock = styled.div`
  width: 100vw;
  height: 300px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
`;

function NewSongTemplete({ children }) {
  return <NewSongTempleteBlock>{children}</NewSongTempleteBlock>;
}

export default NewSongTemplete;
