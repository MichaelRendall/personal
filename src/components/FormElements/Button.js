import React from "react";
import { useState } from "react/cjs/react.development";
import Dropdown from "../UI/Dropdown";
import classes from "./Button.module.scss";

const Button = (props) => {
  const [dropdownShowing, setDropdownShowing] = useState(false);

  const toggleDropdown = () => {
    setDropdownShowing(!dropdownShowing);
  };

  const buttonAction = props.filter ? toggleDropdown : props.action;

  return (
    <>
      <button
        className={`${classes.button} ${dropdownShowing && classes.active}`}
        onClick={buttonAction}
      >
        {props.name.toUpperCase()}
        {props.filter && <i className={classes.arrow}></i>}
      </button>
      {dropdownShowing && <Dropdown />}
    </>
  );
};

export default Button;
