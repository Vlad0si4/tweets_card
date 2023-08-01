import { useDispatch } from "react-redux";

import { setFilter } from "../../redux/Filter/filterSlice";

import { useState } from "react";

export const SelectFilter = () => {
  const dispatch = useDispatch();
  const [position] = useState();

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <select value={position} onChange={handleChangeFilter}>
      <option value="ALL">all</option>
      <option value="FOLLOW">follow</option>
      <option value="FOLLOWING">followings</option>
    </select>
  );
};
