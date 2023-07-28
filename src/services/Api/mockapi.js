import axios from "axios";

export const instance = axios.create({
  baseURL: " https://64ac1b909edb4181202f1e3c.mockapi.io",
});

export const fetchUsers = async () => {
  const { data } = await instance.get("/tweets_card");
  return data;
};
