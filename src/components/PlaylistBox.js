import React from 'react';
import styled from 'styled-components';
import { useChartDispatch } from './Provider/ChartProvider.component';
import { lighten, darken } from 'polished'; // css 유틸 함수 라이브러리

const Playlists = styled.ul`
  position: absolute;
  width: 100px;
  //   display: none;
  box-sizing: border-box; // 박스사이즈를 border 기준으로(박스 크기가 width)
  z-index: 1;
  top: 2.3vw;
  right: 13.2vw;
`;

const ListItem = styled.li`
  width: 100%;
  background-color: #eeeeee;
  border-top: 1px #bdbdbd solid;
  border-right: 1px #bdbdbd solid;
  border-left: 1px #bdbdbd solid;
  line-height: 25px;
  &:last-child {
    border-bottom: 1px #bdbdbd solid;
  }
  &:hover {
    background-color: ${lighten(0.1, '#eeeeee')};
  }
  &:active {
    background-color: ${darken(0.1, '#eeeeee')};
  }
`;
function PlaylistBox(props) {
  const dispatch = useChartDispatch();
  const togglePlaylist = () => dispatch({ type: 'TOGGLE_PLAYLIST' });
  return (
    <Playlists onClick={togglePlaylist}>
      <ListItem>LIST1</ListItem>
      <ListItem>LIST2</ListItem>
      <ListItem>LIST3</ListItem>
    </Playlists>
  );
}

export default PlaylistBox;
