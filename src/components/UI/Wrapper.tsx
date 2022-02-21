import React from "react";
import classes from "./Wrapper.module.scss";

interface WrapperProps {
  size?: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const wrapperClasses = [classes.wrapper];
  props.size === "auto"
    ? wrapperClasses.push(classes.auto)
    : wrapperClasses.push(classes.fixed);

  return <div className={wrapperClasses.join(" ")}>{props.children}</div>;
};

export default Wrapper;
