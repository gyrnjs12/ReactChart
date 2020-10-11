import React, { useContext } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import ChartContext from "../context/context";

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
  const value = useContext(ChartContext); // useContext() 불러오기
  console.log("NAV", value);
  return (
    <NavBar>
      <NavItem text="HOME" />
      <NavItem color="#02cd3b" text="MELON" />
      <NavItem color="#24b5e6" text="GENIE" />
      <NavItem color="#ff3c28" text="BUGS" />
    </NavBar>
  );
}

export default React.memo(Nav);
