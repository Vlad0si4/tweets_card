import styled from "styled-components";

export const SelectWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const StyledSelect = styled.select`
  padding-left: 10px;

  width: 140px;
  height: 25px;
  background-color: transparent;
  color: white;
  border-radius: 20px;
  border-color: rgb(201, 181, 223);
  cursor: pointer;
  font-size: 14px;
  align-items: center;
`;

export const StyledOption = styled.option`
  background-color: #4e2991;
  cursor: pointer;
`;
