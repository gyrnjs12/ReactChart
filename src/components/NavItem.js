import React from 'react';
import styled from 'styled-components';
import { useChartDispatch } from './Provider/ChartProvider.component';
import { GrGooglePlus } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { lighten, darken } from 'polished'; // css 유틸 함수 라이브러리import NavItem from './NavItem';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.OAUTH_CLENT_KEY;

const NavItemBlock = styled.div`
  display: flex;
  align-items: center; /* flex에서 아이템들의 수직축 방향 정렬 */
  padding-top: 12px;
  padding-bottom: 9px;
  padding-left: 20px;
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  &:first-letter {
    color: ${(props) => props.color || 'white'};
  }
`;

const ImageButton = styled.button`
  font-size: 25px;
  width: 30px;
  height: 30px;
  color: #ffffff;
  background-color: #393b44;
  position: relative;
  left: 45vw;
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    color: ${lighten(0.1, '#ffffff')};
  }
  &:active {
    color: ${darken(0.1, '#ffffff')};
  }
`;

function NavItem({ text, color, googleLogin, profile }) {
  const dispatch = useChartDispatch();
  const onChangeChart = (e) =>
    dispatch({ type: 'CHANGE_CHART', chart: e.target.innerText });

  return (
    <NavItemBlock>
      {googleLogin && (
        <GoogleLogin
          clientId={clientId}
          buttonText="Google"
          render={({ onClick, disabled }) => (
            <ImageButton>
              <GrGooglePlus onClick={onClick} disabled={disabled} />
            </ImageButton>
          )}
          onSuccess={(result) => console.log('성공', result)}
          onFailure={(result) => console.log('실패', result)}
          cookiePolicy={'single_host_origin'}
        />
      )}
      {profile && (
        <ImageButton>
          <CgProfile />
        </ImageButton>
      )}
      <Text color={color} onClick={onChangeChart}>
        {text}
      </Text>
    </NavItemBlock>
  );
}

export default React.memo(NavItem);
