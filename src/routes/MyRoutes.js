import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../components/product/Basket/Basket";
import Admin from "./../components/admin/Admin";
import HomePage from "./../components/Home/HomePage/HomePage";
import Login from "../components/authentocation/Login";
import Registr from "../components/authentocation/Registr";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "", element: <></>, id: 1 },
    { link: "/admin", element: <Admin />, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "/home", element: <HomePage />, id: 1 },
    { link: "/basket", element: <Basket />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/registr", element: <Registr />, id: 4 },
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
