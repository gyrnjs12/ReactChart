import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import NavItem from "./NavItem";

const NavBar = styled.div`
  width: 72.1vw;
  height: 40px;
  padding-left: 250px;
  padding-right: 250px;
  position: fix;
  background: #393b44;
  display: flex;
`;

function Nav({ children }) {
  const themeContext = useContext(ThemeContext);
  return (
    <NavBar>
      {/* <NavItem text="HOME" /> */}
      <NavItem color={themeContext.colors.MELON} text="MELON" />
      <NavItem color={themeContext.colors.GENIE} text="GENIE" />
      <NavItem color={themeContext.colors.BUGS} text="BUGS" />
    </NavBar>
  );
}

export default React.memo(Nav);
