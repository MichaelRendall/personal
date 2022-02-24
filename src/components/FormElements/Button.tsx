import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  large?: boolean;
  name: string;
  invert?: boolean;
  submit?: boolean;
  disabled?: boolean;
  onClick?: (() => void) | ((event: React.FormEvent) => Promise<void>);
}

const Button: React.FC<ButtonProps> = (props) => {
  const buttonClasses = [classes.button];

  if (props.large) {
    buttonClasses.push(classes.large);
  }

  if (props.invert) {
    buttonClasses.push(classes.invert);
  }

  return (
    <button
      className={buttonClasses.join(" ")}
      onClick={props.onClick}
      type={props.submit ? "submit" : "button"}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
