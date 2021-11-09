import React from "react";
import { NavLink } from "react-router-dom";

import Backdrop from "../UI/Backdrop";
import SideDrawer from "./SideDrawer";

import Hamburger from "./hamburger/Hamburger";
import useToggle from "../../hooks/useToggle";

import classes from "./Header.module.scss";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useToggle(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => setDrawerIsOpen(false)} />}
      <SideDrawer
        show={drawerIsOpen}
        clicked={() => setDrawerIsOpen(false)}
      ></SideDrawer>
      <header className={classes.header}>
        <Hamburger clicked={setDrawerIsOpen} drawerOpen={drawerIsOpen} />
        <div className={classes.logo}>
          <NavLink to="/" onClick={() => setDrawerIsOpen(false)}>
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
