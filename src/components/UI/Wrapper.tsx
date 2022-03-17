import React from "react";
import classes from "./Wrapper.module.scss";

interface WrapperProps {
  size?: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const wrapperClasses = [classes.wrapper];
  !props.size ? wrapperClasses.push(classes.fixed) : wrapperClasses.push();
  props.size === "auto"
    ? wrapperClasses.push(classes.auto)
    : wrapperClasses.push();
  props.size === "aside"
    ? wrapperClasses.push(classes.aside)
    : wrapperClasses.push();

  return <div className={wrapperClasses.join(" ")}>{props.children}</div>;
};

export default Wrapper;
