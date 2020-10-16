import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { MdClear } from 'react-icons/md';
import { useChartDispatch } from './Provider/ChartProvider.component';

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
  background: white;
  padding: 1rem;
  width: 600px;
  height: 400px;
`;
const ButtonBlock = styled.div`
  width: 632px;
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

function MusicModal() {
  const dispatch = useChartDispatch();
  const handleCloseMusic = () => dispatch({ type: 'CLOSE_MODAL' });
  return (
    <ModalTemplete>
      <ButtonBlock>
        <ExitButton onClick={handleCloseMusic}>
          <MdClear />
        </ExitButton>
      </ButtonBlock>
      <Content>
        {/* <h1>모달 테스트</h1>
        <div>음악 틀어지는 공간</div> */}
        <iframe
          title="music"
          width="600"
          height="400"
          src="https://www.youtube.com/embed/gdZLi9oWNZg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Content>
    </ModalTemplete>
  );
}

export default MusicModal;
