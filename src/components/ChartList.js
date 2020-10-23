import React, { useEffect } from 'react';
import styled from 'styled-components';
import ChartItem from './ChartItem';
import axios from 'axios';
import {
  useChartDispatch,
  useChartState,
} from './Provider/ChartProvider.component';
import MusicPortal from '../MusicPortal';
import MusicModal from './MusicModal';

const ChartListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 78px; /* 위아래 20, 양옆 32 */
`;

function ChartList() {
  const dispatch = useChartDispatch();
  const { chart, music, modal } = useChartState();
  async function getChart(site) {
    dispatch({ type: 'GET_CHART' });
    try {
      const response = await axios.get(`http://localhost:3002/chart/${site}`);
      dispatch({ type: 'GET_CHART_SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'GET_CHART_ERROR', error: e });
    }
  }
  useEffect(() => {
    getChart(chart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart]);
  const { data, error } = music;

  if (error) return <div>에러!</div>;
  return (
    <>
      <ChartListBlock>
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
