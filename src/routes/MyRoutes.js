import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../components/Home/HomePage/HomePage";
import Login from "../components/authentocation/Login";
import EditProduct from "../components/product/EditProduct";
import ListProduct from "../components/product/ListProduct";
import DetailsPage from "../page/DetailsPage";
import AddBasket from "../components/product/AddBasket";
<<<<<<< HEAD

=======
import Register from "../components/authentocation/Register";
import Admin from "../components/admin/Admin";
import AdminPage from "./../page/AdminPage";
import { ProtectedRoutes } from "../helpers/function";
>>>>>>> 97cba757498969adc857f113cc1c8d94ee7f8826
const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 1 },
    { link: "/edit/:id", element: <EditProduct />, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "/home", element: <HomePage />, id: 1 },
    { link: "/basket", element: <AddBasket />, id: 2 },
    { link: "/login", element: <Login />, id: 3 },
    { link: "/registr", element: <Registr />, id: 4 },
    { link: "/home", element: <ListProduct />, id: 5 },
    { link: "/register", element: <Register />, id: 4 },
    { link: "/", element: <ListProduct />, id: 5 },
    { link: "/detail/:id", element: <DetailsPage />, id: 6 },
  ];
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          {ADMIN_ROUTES.map((el) => (
            <Route path={el.link} element={el.element} key={el.id} />
          ))}
        </Route>
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
