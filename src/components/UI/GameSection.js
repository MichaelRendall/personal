import React from "react";
import classes from "./GameSection.module.scss";

const GameSection = (props) => {
  return <section className={classes.gameSection}>{props.children}</section>;
};

export default GameSection;
