import React from 'react';
import styled from 'styled-components';
import YTsearch from 'youtube-api-search';
import { lighten, darken } from 'polished'; // css 유틸 함수 라이브러리
import { AiFillYoutube } from 'react-icons/ai';
import { useChartDispatch } from './Provider/ChartProvider.component';

const API_KEY = process.env.REACT_APP_API_KEY;

const ChartItemBlock = styled.div`
  display: flex;
  border: 1px #212121 solid;
  border-radius: 6px;
  padding: 10px 54px;
  align-items: center;
`;

const NameBlock = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;

const MusicName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const AritistName = styled.div`
  font-size: 16px;
  font-weight: 450;
  color: #393b44;
`;

const RankText = styled.div`
  width: 50px;
  font-size: 26px;
  color: #797a7e;
  font-weight: bold;
  margin-right: 24px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.imgPath});
  background-size: 60px 60px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const YouTubeButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 120px;
  color: #ff0102;
  font-size: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  background: #f6f6f6;
  &:hover {
    color: ${lighten(0.1, '#ff0102')};
  }
  &:active {
    color: ${darken(0.1, '#ff0102')};
  }
`;

function ChartItem({ imgPath, music, artist, rank }) {
  const dispatch = useChartDispatch();
  const handleOpenMusic = (e) => {
    const musicName = e.target.id || e.target.parentNode.id;
    YTsearch({ key: API_KEY, term: musicName }, (data) => {
      dispatch({
        type: 'OPEN_MODAL',
        name: musicName,
        id: data[0].id.videoId,
      });
    });
  };

  return (
    <ChartItemBlock id={music}>
      <RankText>{rank}</RankText>
      <Image imgPath={imgPath} />
      <NameBlock>
        <MusicName>{music}</MusicName>
        <AritistName>{artist}</AritistName>
      </NameBlock>
      <YouTubeButton>
        <AiFillYoutube id={music} onClick={handleOpenMusic} />
      </YouTubeButton>
    </ChartItemBlock>
  );
}

export default React.memo(ChartItem);
