import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import NewSongItem from './NewSongItem';
import {
  useChartDispatch,
  useChartState,
} from './Provider/ChartProvider.component';
import axios from 'axios';

const NewSongBlock = styled.div`
  max-width: 1201px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.div`
  width: 100%;
  color: #eeeeee;
  font-size: 16px;
  font-weight: bold;
  margin: 0 14px;
`;

function NewSong() {
  const dispatch = useChartDispatch();
  const { newsong } = useChartState();
  const { data, error, loading } = newsong;
  //const localURL = 'http://localhost:5000/new';
  const herokuURL = 'https://hidden-ridge-32364.herokuapp.com/new';
  async function getNewSong() {
    dispatch({ type: 'GET_NEWSONG' });
    try {
      const response = await axios.get(herokuURL);
      dispatch({ type: 'GET_NEWSONG_SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'GET_NEWSONG_ERROR', error: e });
    }
  }
  useEffect(() => {
    if (data) return;
    getNewSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  const onToggle = useCallback(
    (id) => {
      dispatch({ type: 'TOGGLE_HOVER', id });
    },
    [dispatch],
  );
  if (error) return <div>ERROR!!</div>;
  if (loading) return <div>Loading...</div>;
  if (!data) return null;
  return (
    <NewSongBlock>
      {data &&
        data.map((song) => (
          <NewSongItem
            key={song.id}
            img={song.img}
            artist={song.artist || 'Various Artist'}
            title={song.title}
            hover={song.hover}
            onToggle={() => onToggle(song.id)}
          />
        ))}
      <Text>K-POP 음원의 실시간 차트를 확인할 수있는 플랫폼입니다.</Text>
    </NewSongBlock>
  );
}

export default NewSong;
