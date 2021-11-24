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
      </button>
    </>
  );
};

export default Button;
