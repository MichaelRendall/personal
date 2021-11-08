import React from "react";
import classes from "./Hamburger.module.scss";

const Hamburger = (props) => {
  return (
    <div>
      <div className={classes.hamburger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hamburger;
