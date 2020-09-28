import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavBar = styled.div`
  width: 100%;
  height: 40px;

  position: fix;
  background: #393b44;
  display: flex;
`;

function Nav({ children }) {
  return (
    <NavBar>
      <NavItem text="HOME" />
      <NavItem color="#02cd3b" text="MELON" />
      <NavItem color="#24b5e6" text="GENIE" />
      <NavItem color="#ff3c28" text="BUGS" />
    </NavBar>
  );
}

export default Nav;
