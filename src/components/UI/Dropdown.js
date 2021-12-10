import React, { useRef } from "react";
import classes from "./Dropdown.module.scss";
import CSSTransition from "react-transition-group/CSSTransition";

const Dropdown = (props) => {
  const nodeRef = useRef();
  return (
    <CSSTransition
      in={props.show}
      timeout={100}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exitActive: classes.exitActive,
        exit: classes.exit,
      }}
    >
      <div ref={nodeRef} className={classes.dropdown}>
        {props.children}
      </div>
    </CSSTransition>
  );
};

export default Dropdown;
