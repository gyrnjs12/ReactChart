import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
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
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const themeContext = useContext(ThemeContext);
  return (
    <NavBar>
      <Box isMobile={isMobile} />
      <Link to="/">
        <NavItem text="HOME" />
      </Link>
      <NavItem color={themeContext.colors.MELON} text="MELON" />
      <NavItem color={themeContext.colors.GENIE} text="GENIE" />
      <NavItem color={themeContext.colors.BUGS} text="BUGS" />
      <Link to="/:id">
        <NavItem profile />
      </Link>
      <NavItem googleLogin />
      <NavItem logout />
    </NavBar>
  );
}

export default React.memo(Nav);
