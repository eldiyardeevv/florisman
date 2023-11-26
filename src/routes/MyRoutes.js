import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../components/product/Basket/Basket";
// import Admin from "./../components/admin/Admin";
import HomePage from "./../components/Home/HomePage/HomePage";
import Login from "../components/authentocation/Login";
import Registr from "../components/authentocation/Register";
import AdminPage from "../page/AdminPage";
import EditProduct from "../components/product/EditProduct";
import ListProduct from "../components/product/ListProduct";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 1 },
    { link: "/edit/:id", element: <EditProduct />, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "/home", element: <HomePage />, id: 1 },
    { link: "/basket", element: <Basket />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/registr", element: <Registr />, id: 4 },
    { link: "/", element: <ListProduct />, id: 5 },
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
