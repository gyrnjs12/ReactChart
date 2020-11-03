import React from 'react';
import styled from 'styled-components';

const NewSongItemBlock = styled.div`
  width: 170px;
  height: 170px;
  margin: 0 15px;
`;
const AlbumImage = styled.div`
  background-image: url(${({ imgPath }) => imgPath});
  background-size: 170px 170px;
  border-radius: 5px;
  width: 170px;
  height: 170px;
`;

const NameBox = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  width: 170px;
  height: 30px;
  position: absolute;
  top: 307px;
  z-index: 100;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
`;

const NameText = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 450;
`;
function NewSongItem({ text }) {
  return (
    <NewSongItemBlock>
      <AlbumImage imgPath="https://cdnimg.melon.co.kr/cm2/album/images/105/11/210/10511210_20201029163557_500.jpg?41316f7d9715420d7834405122bc4470/melon/resize/156/quality/80/optimize" />
      <NameBox>
        <NameText>dd</NameText>
      </NameBox>
    </NewSongItemBlock>
  );
}

export default NewSongItem;
