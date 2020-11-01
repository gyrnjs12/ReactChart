import React from 'react';
import styled from 'styled-components';

const NewSongBlock = styled.div`
  width: 67vw;
  height: 100%;
  background-color: blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const NewSongItem = styled.div`
  width: 170px;
  height: 170px;
  background-color: #ff80ab;
  margin: 0 15px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  background-color: #fa80ab;
  margin: 0 14px;
`;

function NewSong() {
  return (
    <NewSongBlock>
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <NewSongItem />
      <Text>K-POP 음원의 실시간 차트를 확인할 수있는 플랫폼입니다.</Text>
    </NewSongBlock>
  );
}

export default NewSong;
