import React from "react";
import "./Header.scss";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CottageIcon from "@mui/icons-material/Cottage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import img from "../../../img/img1.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header__admin">
            <span>
              <NavLink to="/admin">
                <AdminPanelSettingsIcon />
              </NavLink>
            </span>
            <span>
              <NavLink to="/">
                <CottageIcon />
              </NavLink>
            </span>
          </div>
          <div className="header__text">
            <img src={img} alt="" />
            <div className="header__text__block">
              <h3 className="header__text__block__h3">FLORISTMAN</h3>
              <p className="header__text__block__h3__p">
                Широкий выбор на любой вкус
              </p>
            </div>
          </div>
          <div className="header__logo">
            <input
              className="header__logo__inp"
              type="text"
              placeholder="search.."
            />
            <span>
              <NavLink to="/basket">
                <ShoppingCartIcon />
              </NavLink>
            </span>
            <span>
              <NavLink>
                <GroupAddIcon />
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
