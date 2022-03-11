import React, { useContext } from "react";
import classes from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import NavContext from "../../../context/nav-context";
import { ThemeContext } from "../../../context/theme-context";

interface NavItemProps {
  url: string;
  name: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const navCtx = useContext(NavContext);
  const themeCtx = useContext(ThemeContext);
  return (
    <li className={`${classes.navItem} ${classes[themeCtx.theme]}`}>
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
