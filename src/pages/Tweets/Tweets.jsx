import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserThunk } from "../../redux/UserCard/operations";
import { UsersCard } from "../../components/UsersCard/UsersCard";
import { StyledBtnGoBack } from "./Tweets.styled";
import { SelectFilter } from "../../components/SelectFilter/SelectFilter";

export const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <>
      <StyledBtnGoBack to="/">Go back</StyledBtnGoBack>
      <SelectFilter />
      <UsersCard />
    </>
  );
};
