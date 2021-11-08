import React from "react";
import NavItem from "./NavItem";
import classes from "./NavItems.module.scss";

const NavItems = () => {
  return (
    <nav className={classes.navItems}>
      <ul>
        <NavItem name="Charades" />
        <NavItem name="Paper" />
      </ul>
    </nav>
  );
};

export default NavItems;
