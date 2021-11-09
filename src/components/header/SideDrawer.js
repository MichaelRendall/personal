import React, { useRef } from "react";
import ReactDom from "react-dom";

import CSSTransition from "react-transition-group/CSSTransition";

import NavItems from "./nav/NavItems";
import classes from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const nodeRef = useRef();
  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
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
      <aside ref={nodeRef} className={classes.sideDrawer}>
        <NavItems />
      </aside>
    </CSSTransition>
  );

  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
