import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import classes from "./Button.module.scss";

interface ButtonProps {
  large?: boolean;
  small?: boolean;
  name: string;
  invert?: boolean;
  submit?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (() => void) | ((event: React.FormEvent) => Promise<void>);
}

const Button: React.FC<ButtonProps> = (props) => {
  console.log("loading Button.tsx");
  const themeCtx = useContext(ThemeContext);

  const buttonClasses = [classes.button, classes[themeCtx.theme]];

  if (props.large) {
    buttonClasses.push(classes.large);
  }

  if (props.small) {
    buttonClasses.push(classes.small);
  }

  if (props.invert) {
    buttonClasses.push(classes.invert);
  }

  if (props.fullWidth) {
    buttonClasses.push(classes.fullWidth);
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
