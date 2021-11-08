import React from "react";
import NavItem from "./NavItem";
import classes from "./NavItems.module.scss";

const NavItems = (props) => {
  return (
    <nav className={classes.navItems}>
      <ul>
        <NavItem name="Charades" url="/charades" clicked={props.clicked} />
        <NavItem name="Paper Game" url="/paper-game" clicked={props.clicked} />
        <NavItem name="Flag Quiz" url="/flags" clicked={props.clicked} />
        <NavItem name="Contact" url="/contact" clicked={props.clicked} />
      </ul>
    </nav>
  );
};

export default NavItems;
