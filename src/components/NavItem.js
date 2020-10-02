import React from "react";
import styled from "styled-components";

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
  &:first-letter {
    color: ${(props) => props.color || "white"};
  }
`;
function NavItem({ text, color }) {
  return (
    <NavItemBlock>
      <Text color={color}>{text}</Text>
    </NavItemBlock>
  );
}

export default NavItem;
