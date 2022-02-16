import React from "react";
import classes from "./GameSection.module.scss";

interface GameSectionProps {
  theme: string;
}

const GameSection: React.FC<GameSectionProps> = (props) => {
  return (
    <section className={`${classes.gameSection} ${classes[props.theme]}`}>
      {props.children}
    </section>
  );
};

export default GameSection;
