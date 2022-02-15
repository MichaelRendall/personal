import React from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.scss";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
