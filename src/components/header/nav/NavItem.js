import React, { useContext } from "react";
import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import NavContext from "../../../context/nav-context";

const NavItem = (props) => {
  const navCtx = useContext(NavContext);
  return (
    <li className={classes.navItem}>
      <NavLink
        to={props.url}
        className={(navData) => (navData.isActive ? classes.active : "")}
        onClick={() => navCtx.toggleDrawer(false)}
      >
        {props.name.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default NavItem;
