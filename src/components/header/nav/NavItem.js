import React from "react";
import classes from "./NavItem.module.scss";

const NavItem = (props) => {
  return <li className={classes.navItem}>{props.name.toUpperCase()}</li>;
};

export default NavItem;
