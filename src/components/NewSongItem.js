import React from 'react';
import styled from 'styled-components';

const NewSongItemBlock = styled.div`
  width: 170px;
  height: 170px;
  margin: 0 15px;
  border-radius: 5px;
`;

const AlbumImage = styled.div`
  background-image: url(${({ imgPath }) => imgPath});
  background-size: 170px 170px;
  border-radius: 5px;
  width: 170px;
  height: 170px;
  position: reletive;
  cursor: pointer;
  &:hover {
    background-image: url(${({ imgPath }) => imgPath}), rgba(0, 0, 0, 0.65);
  }
`;

const NameBox = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  width: 170px;
  height: 30px;
  top: 140px;
  position: relative;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
`;

const HoverBox = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  width: 170px;
  height: 170px;
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Text = styled.div`
  max-width: 140px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 450;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
function NewSongItem({ artist, img, hover, onToggle, title }) {
  return (
    <NewSongItemBlock>
      <AlbumImage imgPath={img} onMouseEnter={onToggle} onMouseLeave={onToggle}>
        {hover ? (
          <HoverBox>
            <Text className="title" title={title}>
              {title}
            </Text>
            <Text>{artist}</Text>
          </HoverBox>
        ) : (
          <NameBox>
            <Text>{artist}</Text>
          </NameBox>
        )}
      </AlbumImage>
    </NewSongItemBlock>
  );
}

export default NewSongItem;
