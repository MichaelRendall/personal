import React from "react";
import classes from "./Hamburger.module.scss";

const Hamburger = (props) => {
  let content;
  content = (
    <div>
      <div
        className={`${classes.hamburger} ${
          props.drawerOpen ? classes.change : ""
        }`}
        onClick={props.clicked}
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
