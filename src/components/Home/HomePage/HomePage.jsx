import React from "react";
import Home from "../Home";
import Katalog from "../Katalog/Katalog";
import About from "../Aboutt/About";
import ListProduct from "../../product/ListProduct";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Katalog />
      <ListProduct />
      <About />
    </div>
  );
};

export default HomePage;
