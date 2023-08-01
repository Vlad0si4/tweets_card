import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  border: none;
  border-bottom: 2px solid rgb(201 181 223);

  height: 60px;
`;
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  &:hover {
  }
  &.active {
    color: #5cd3a8;
  }
`;
