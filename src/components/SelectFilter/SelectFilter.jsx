import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/Filter/filterSlice";

import { useState } from "react";
import {
  SelectWrapper,
  StyledOption,
  StyledSelect,
} from "./SelectFilter.styled";

export const SelectFilter = () => {
  const dispatch = useDispatch();
  const [position] = useState();

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <SelectWrapper>
      <StyledSelect value={position} onChange={handleChangeFilter}>
        <StyledOption value="ALL">All</StyledOption>
        <StyledOption value="FOLLOW">Follow</StyledOption>
        <StyledOption value="FOLLOWING">Followings</StyledOption>
      </StyledSelect>
    </SelectWrapper>
  );
};
