import React from "react";
import classes from "./Container.module.scss";

const Container: React.FC = (props) => {
  console.log("loading Container.tsx");
  return <section className={classes.container}>{props.children}</section>;
};

export default Container;
