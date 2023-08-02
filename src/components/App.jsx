import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./SharedLayout/SharedLayout";
import { Home } from "../pages/Home/Home";
import { GlobalStyle } from "../services/Style/GlobalStyle";
import { lazy } from "react";
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

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
