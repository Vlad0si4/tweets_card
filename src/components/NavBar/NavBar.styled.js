import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border: none;
  border-bottom: 2px solid rgb(201 181 223);

  height: 60px;
`;
export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

export const StyledLink = styled(NavLink)`
  &:hover {
  }
  &.active {
    color: #5cd3a8;
  }
`;
