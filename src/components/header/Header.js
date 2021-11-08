import React, { useState } from "react";

import Backdrop from "../UI/Backdrop";
import SideDrawer from "./SideDrawer";
import Hamburger from "./hamburger/Hamburger";
import classes from "./Header.module.scss";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={toggleDrawerHandler} />}
      <SideDrawer
        show={drawerIsOpen}
        toggleDrawer={toggleDrawerHandler}
      ></SideDrawer>
      <header className={classes.header}>
        <Hamburger clicked={toggleDrawerHandler} drawerOpen={drawerIsOpen} />
        <div className={classes.logo}>
          MICHAEL
          <br />
          RENDALL
        </div>
        <div></div>
      </header>
    </>
  );
};

export default Header;
