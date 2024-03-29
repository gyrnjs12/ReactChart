import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import NavItem from './NavItem';
import { useChartState } from './Provider/ChartProvider.component';

const NavBar = styled.div`
  width: 100vw;
  height: 40px;
  position: fixed;
  background: #393b44;
  display: flex;
  z-index: 1;
`;

const Box = styled.div`
  padding-left: ${({ isMobile }) => (isMobile ? `0px` : `15.5vw`)};
`;

function Nav({ children }) {
  const { google } = useChartState();
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const themeContext = useContext(ThemeContext);
  return (
    <NavBar>
      <Box isMobile={isMobile} />
      <NavItem color={themeContext.colors.MELON} text="MELON" />
      <NavItem color={themeContext.colors.GENIE} text="GENIE" />
      <NavItem color={themeContext.colors.BUGS} text="BUGS" />
      {/* <NavItem googleLogin />
      <NavItem logout />
      {google.logged && <NavItem profile />} */}
    </NavBar>
  );
}

export default React.memo(Nav);
