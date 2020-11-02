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
  width: 170px;
  height: 170px;
`;

function NewSongItem() {
  return (
    <NewSongItemBlock>
      <AlbumImage imgPath="https://cdnimg.melon.co.kr/cm2/album/images/105/11/210/10511210_20201029163557_500.jpg?41316f7d9715420d7834405122bc4470/melon/resize/156/quality/80/optimize" />
    </NewSongItemBlock>
  );
}

export default NewSongItem;
