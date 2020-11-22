import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import ChartItem from './ChartItem';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import {
  useChartDispatch,
  useChartState,
} from './Provider/ChartProvider.component';
import MusicPortal from '../MusicPortal';
import Progress from './Progress';
import MusicModal from './MusicModal';

const ChartListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  ${({ isSmall }) => {
    return css`
      ${isSmall
        ? ``
        : `padding: 50px 78px; /* 위아래 20, 양옆 78 */
        `};
    `;
  }}
`;

function ChartList() {
  const isSmall = useMediaQuery({
    query: '(max-width: 680px)',
  });
  const dispatch = useChartDispatch();
  const { chart, music, modal } = useChartState();
  const { data, error, loading } = music;
  //const herokuURL = 'https://hidden-ridge-32364.herokuapp.com/chart/';
  const localURL = 'http://localhost:5000/chart/';
  async function getChart(site) {
    dispatch({ type: 'GET_CHART' });
    try {
      const response = await axios.get(`${localURL}/${site}`);
      dispatch({ type: 'GET_CHART_SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'GET_CHART_ERROR', error: e });
    }
  }
  useEffect(() => {
    getChart(chart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart]);

  if (error) return <div>에러!</div>;
  if (loading) return <Progress />;
  return (
    <>
      <ChartListBlock isSmall={isSmall}>
        {data &&
          data.map((music) => (
            <ChartItem
              key={music.id}
              rank={music.id}
              imgPath={music.img}
              music={music.title}
              artist={music.artist}
            />
          ))}
      </ChartListBlock>
      {modal && (
        <MusicPortal>
          <MusicModal />
        </MusicPortal>
      )}
    </>
  );
}

export default React.memo(ChartList);
