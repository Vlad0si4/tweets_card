import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBtnGoBack = styled(NavLink)`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  margin-left: auto;

  border-radius: 10px;
  background: #ebd8ff;

  color: #373737;
  font-size: 14px;

  &:hover {
    background: #5cd3a8;
  }
`;
