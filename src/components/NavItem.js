import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  useChartDispatch,
  useChartState,
} from './Provider/ChartProvider.component';
import { GrGooglePlus } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { lighten, darken } from 'polished'; // css 유틸 함수 라이브러리
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_OAUTH_KEY;

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
  const { google } = useChartState();
  const onChangeChart = (e) =>
    dispatch({ type: 'CHANGE_CHART', chart: e.target.innerText });
  const onLogin = (res) => {
    dispatch({ type: 'ON_LOGIN', id: res.googleId, name: res.profileObj.name });
    window.sessionStorage.setItem('id', res.googleId);
    window.sessionStorage.setItem('name', res.profileObj.name);
    window.sessionStorage.setItem('isLogged', true);
    console.log('결과:', res);
  };
  const onLogout = (res) => {
    const auth = window.gapi.auth2.getAuthInstance();
    dispatch({ type: 'ON_LOGOUT' });
    auth.signOut().then(() => console.log('LOGOUT')); // 이게 있어야 로그아웃을 함
    window.sessionStorage.clear();
  };
  useEffect(() => {
    const isLogeed = window.sessionStorage.getItem('isLogged');
    const id = window.sessionStorage.getItem('id');
    const name = window.sessionStorage.getItem('name');
    if (isLogeed) {
      dispatch({ type: 'ON_LOGIN', id, name });
    } else {
      dispatch({ type: 'ON_LOGOUT' });
    }
  }, [dispatch]);
  const onFailure = (err) => console.log(err);
  return (
    <NavItemBlock>
      {googleLogin &&
        (google.logged ? (
          <ImageButton>
            <BiLogOut onClick={onLogout} />
          </ImageButton>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Google"
            render={({ onClick, disabled }) => (
              <ImageButton>
                <GrGooglePlus onClick={onClick} disabled={disabled} />
              </ImageButton>
            )}
            onSuccess={onLogin}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        ))}
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
