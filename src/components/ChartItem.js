import React from 'react';
import styled, { css } from 'styled-components';
import YTsearch from 'youtube-api-search';
import { lighten, darken } from 'polished'; // css 유틸 함수 라이브러리
import { AiFillYoutube } from 'react-icons/ai';
import { useChartDispatch } from './Provider/ChartProvider.component';
import { useMediaQuery } from 'react-responsive';

const API_KEY = process.env.REACT_APP_API_KEY;

const ChartItemBlock = styled.div`
  display: flex;
  ${({ isSmall }) => {
    return css`
      ${isSmall
        ? `
        border-bottom: 1px #212121 solid;
        border-radius: 0;
        padding: 10px 15px;`
        : `
        border: 1px #212121 solid;
        border-radius: 6px;
        padding: 10px 40px;`}
    `;
  }}
  align-items: center;
`;

const NameBlock = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
`;

const MusicName = styled.div`
  font-size: ${({ isMobile }) => (isMobile ? `16px` : `18px`)};
  font-weight: 500;
  width: 38vw;
  height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AritistName = styled.div`
  font-size: ${({ isMobile }) => (isMobile ? `14px` : `16px`)};
  font-weight: 450;
  color: #393b44;
`;

const RankBox = styled.div`
  width: 40px;
  height: 31px;
  margin-right: 10px;
`;

const RankText = styled.div`
  font-size: 26px;
  color: #797a7e;
  font-weight: bold;
  margin-right: 24px;
`;
const ImageBox = styled.div`
  ${({ isMobile }) => {
    const size = isMobile ? `45` : `60`;
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
`;
const Image = styled.div`
  background-image: url(${(props) => props.imgPath});
  ${({ isMobile }) => {
    const size = isMobile ? `45` : `60`;
    return css`
      background-size: ${size}px ${size}px;
      width: ${size}px;
      height: ${size}px;
    `;
  }}
  margin-right: 20px;
  border-radius: 8px;
`;

const YouTubeButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: -3vw;
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
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const isSmall = useMediaQuery({
    query: '(max-width: 680px)',
  });
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
    <ChartItemBlock id={music} isSmall={isSmall}>
      <RankBox>
        <RankText isMobile={isMobile}>{rank}</RankText>
      </RankBox>
      <ImageBox isMobile={isMobile}>
        <Image imgPath={imgPath} isMobile={isMobile} />
      </ImageBox>
      <NameBlock>
        <MusicName isMobile={isMobile}>{music}</MusicName>
        <AritistName isMobile={isMobile}>{artist}</AritistName>
      </NameBlock>
      <YouTubeButton>
        <AiFillYoutube id={music} onClick={handleOpenMusic} />
      </YouTubeButton>
    </ChartItemBlock>
  );
}

export default React.memo(ChartItem);
