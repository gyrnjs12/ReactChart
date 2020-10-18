import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import { lighten, darken } from 'polished';
import { MdClear } from 'react-icons/md';
import {
  useChartDispatch,
  useChartState,
} from './Provider/ChartProvider.component';

const ModalTemplete = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  background: #373a40;
  padding: 1rem;
  width: 640px;
  height: 480px;
  border-radius: 6px;
`;
const ButtonBlock = styled.div`
  width: 672px;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

const ExitButton = styled.button`
  background: none;
  color: #555555;
  &:hover {
    color: ${lighten(0.1, '#000000')};
  }
  &:active {
    color: ${darken(0.1, '#000000')};
  }
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: none;
  border: none;
`;

const opts = {
  host: 'https://www.youtube.com',
  width: '640',
  height: '480',
  playerVar: {
    autoplay: 1,
    origin: 'http://localhost:3000',
  },
};
function MusicModal() {
  const dispatch = useChartDispatch();
  const { search } = useChartState();
  const handleCloseMusic = () => dispatch({ type: 'CLOSE_MODAL' });
  return (
    <ModalTemplete>
      <ButtonBlock>
        <ExitButton onClick={handleCloseMusic}>
          <MdClear />
        </ExitButton>
      </ButtonBlock>
      <Content>
        <YouTube videoId={search.videoId} opts={opts} />
      </Content>
    </ModalTemplete>
  );
}

export default MusicModal;
