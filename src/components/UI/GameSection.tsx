import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import classes from "./GameSection.module.scss";

const GameSection: React.FC = (props) => {
  console.log("loading GameSection.tsx");
  const themeCtx = useContext(ThemeContext);
  return (
    <section className={`${classes.gameSection} ${classes[themeCtx.theme]}`}>
      {props.children}
    </section>
  );
};

export default GameSection;
