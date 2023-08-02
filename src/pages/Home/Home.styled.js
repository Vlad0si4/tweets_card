import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  min-height: calc(100vh - 50px);
`;

export const Title = styled.h1`
  color: white;
  transition: transform 0.3s ease;
  &:hover {
    color: #5cd3a8;
    transform: scale(1.04);
  }
`;

export const LinkStyled = styled(NavLink)``;
