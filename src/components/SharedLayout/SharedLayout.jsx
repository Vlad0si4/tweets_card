import { Suspense } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
