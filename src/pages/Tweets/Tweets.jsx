import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../../redux/UserCard/operations";
import { UsersCard } from "../../components/UsersCard/UsersCard";
import { SelectFilter } from "../../components/SelectFilter/SelectFilter";
import { selectLoading } from "../../redux/UserCard/selector";

export const Tweets = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <>
      <SelectFilter />
      {loading ? <h1>load</h1> : <UsersCard />}
    </>
  );
};
