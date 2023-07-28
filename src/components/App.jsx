import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./NavBar/Layout";
import { Home } from "../pages/Home/Home";
import { Tweets } from "../pages/Tweets/Tweets";
import { GlobalStyle } from "../services/Style/GlobalStyle";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
