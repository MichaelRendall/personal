import React from "react";
import { FaFilm, FaMusic, FaRunning, FaQuestion } from "react-icons/fa";

import classes from "./CharadeCard.module.scss";
import Button from "../FormElements/Button";

interface CharadeCardProps {
  category: string;
  charade: string;
  theme: string;
  clicked: () => void;
}

const CharadeCard: React.FC<CharadeCardProps> = (props) => {
  let icon: JSX.Element;
  if (props.category === "film") {
    icon = <FaFilm />;
  } else if (props.category === "song") {
    icon = <FaMusic />;
  } else if (props.category === "action") {
    icon = <FaRunning />;
  } else {
    icon = <FaQuestion />;
  }

  return (
    <>
      <span className={`${classes.category}`}>
        {icon}
        <h3>{props.category.toString().toUpperCase()}</h3>
        {icon}
      </span>
      <h2>{props.charade}</h2>
      <Button onClick={props.clicked} name="Got it" />
    </>
  );
};

export default CharadeCard;
