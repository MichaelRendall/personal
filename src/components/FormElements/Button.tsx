import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  large?: boolean;
  name: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`${classes.button} ${props.large && classes.large}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
