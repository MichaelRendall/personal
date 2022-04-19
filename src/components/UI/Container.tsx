import React from "react";
import classes from "./Container.module.scss";

const Container: React.FC = (props) => {
  console.log("container");
  return <section className={classes.container}>{props.children}</section>;
};

export default Container;
