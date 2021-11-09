import React, { useContext } from "react";
import classes from "./Hamburger.module.scss";
import NavContext from "../../../context/nav-context";

const Hamburger = (props) => {
  const navCtx = useContext(NavContext);
  let content;
  content = (
    <div>
      <div
        className={`${classes.hamburger} ${
          navCtx.drawerShowing ? classes.change : ""
        }`}
        onClick={navCtx.toggleDrawer}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  return content;
};

export default Hamburger;
