import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthContext from "./context/AuthContext";
import ProductContext from "./context/ProductContext";
import MyRoutes from "./routes/MyRoutes";
import Footer from "./components/Navbar/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <App />
        <MyRoutes />
        <Footer />
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
