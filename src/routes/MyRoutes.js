import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../components/product/Basket/Basket";
import Admin from "./../components/admin/Admin";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "", element: <></>, id: 1 },
    { link: "", element: <></>, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    // { link: "/home", element: <Home />, id: 1 },
    { link: "/basket", element: <Basket />, id: 2 },
    { link: "/admin", element: <Admin />, id: 3 },
  ];
  return (
    <>
      <Routes>
        {ADMIN_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
