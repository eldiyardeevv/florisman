import React from "react";
import "./Header.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CottageIcon from "@mui/icons-material/Cottage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import img from "../../../img/img1.jpg";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <span>
            <AdminPanelSettingsIcon />
          </span>
          <span>
            <CottageIcon />
          </span>
        </div>
        <div className="header__text">
          <img src={img} alt="" />
          <div>
            <h2>FLORISTMAN</h2>
            <p>Широкий выбор на любой вкус</p>
          </div>
        </div>
        <div className="header__logo">
          <input type="text" placeholder="search.." />
          <span>
            <ShoppingCartIcon />
          </span>
          <span>
            <GroupAddIcon />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
