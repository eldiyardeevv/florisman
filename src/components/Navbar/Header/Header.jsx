import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import img from "../../../img/img1.jpg";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import CottageIcon from "@mui/icons-material/Cottage";
import Admin from "../../admin/Admin";

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to="/registr">
        <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
      </NavLink>
      <NavLink to="/login">
        <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
      </NavLink>
      <NavLink to="">
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </NavLink>
    </Menu>
  );
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header__admin">
            <IconButton
              onClick={() => navigate("/admin ")}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Admin />
            </IconButton>
            <span>
              <NavLink to="/home">
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
            <div>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {renderMenu}
    </header>
  );
};

export default Header;
