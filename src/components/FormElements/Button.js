import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <>
      <button
        className={`${classes.button} ${props.active && classes.active}`}
        onClick={props.onClick}
      >
        {props.name.toUpperCase()}
        {props.filter && <i className={classes.arrow}></i>}
      </button>
    </>
  );
};

export default Button;
