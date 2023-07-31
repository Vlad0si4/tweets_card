import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserThunk } from "../../redux/UserCard/operations";
import { UsersCard } from "./UsersCard";

export const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <>
      <button>go back</button>
      <UsersCard />
    </>
  );
};
