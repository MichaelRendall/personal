import React from "react";
import classes from "./Wrapper.module.scss";

interface WrapperProps {
  size?: string;
  type?: string;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  let size = props.size;
  if (!props.size) {
    size = "fixed";
  }
  let type = props.type;
  if (!props.type) {
    type = "large";
  }

  return (
    <div className={`${classes.wrapper} ${classes[size!]} ${classes[type!]}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
