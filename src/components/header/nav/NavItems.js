import React from "react";
import NavItem from "./NavItem";
import classes from "./NavItems.module.scss";

const NavItems = () => {
  return (
    <nav className={classes.navItems}>
      <ul>
        <NavItem name="Charades" url="/charades" />
        <NavItem name="Paper Game" url="/paper-game" />
        <NavItem name="Flag Quiz" url="/flags" />
        <NavItem name="Contact" url="/contact" />
      </ul>
    </nav>
  );
};

export default NavItems;
