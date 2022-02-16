import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Backdrop from "../UI/Backdrop";
import SideDrawer from "./SideDrawer";

import Hamburger from "./hamburger/Hamburger";
import NavContext from "../../context/nav-context";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  const navCtx = useContext(NavContext);

  return (
    <>
      {navCtx.drawerShowing && (
        <Backdrop onClick={() => navCtx.toggleDrawer(false)} />
      )}
      <SideDrawer show={navCtx.drawerShowing}></SideDrawer>
      <header className={classes.header}>
        <Hamburger />
        <div className={classes.logo}>
          <NavLink to="/" onClick={() => navCtx.toggleDrawer(false)}>
            MICHAEL
            <br />
            RENDALL
          </NavLink>
        </div>
        <div></div>
      </header>
    </>
  );
};

export default Header;
