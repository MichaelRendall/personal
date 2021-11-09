import React from "react";
import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      <NavLink
        to={props.url}
        className={(navData) => (navData.isActive ? classes.active : "")}
        onClick={props.clicked}
      >
        {props.name.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default NavItem;
