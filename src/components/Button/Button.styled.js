import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBtnGoBack = styled(NavLink)`
  display: flex;
  width: 50px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  margin-left: auto;

  border-radius: 10px;
  background: #ebd8ff;

  color: #373737;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;

  text-transform: uppercase;
  &:hover {
    background: #5cd3a8;
  }
`;
