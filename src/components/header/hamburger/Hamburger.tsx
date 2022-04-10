import React, { useContext } from "react";
import classes from "./Hamburger.module.scss";
import NavContext from "../../../context/nav-context";
import { CgMenuLeft } from "react-icons/cg";

const Hamburger = () => {
  const navCtx = useContext(NavContext);
  let content;
  content = (
    <div>
      <CgMenuLeft
        className={`${classes.hamburger} ${
          navCtx.drawerShowing && classes.active
        }`}
        onClick={() => navCtx.toggleDrawer()}
        aria-label="Open Menu"
      />
    </div>
  );

  return content;
};

export default Hamburger;
