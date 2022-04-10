import React from "react";
import classes from "./GameSection.module.scss";

const GameSection: React.FC = (props) => {
  console.log("loading GameSection.tsx");
  return (
    <section className={`${classes.gameSection}`}>{props.children}</section>
  );
};

export default GameSection;
