import React from "react";
import { Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "", element: <></>, id: 1 },
    { link: "", element: <></>, id: 2 },
  ];
  const PUBLIC_ROUTES = [
    { link: "", element: <></>, id: 1 },
    { link: "", element: <></>, id: 2 },
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
