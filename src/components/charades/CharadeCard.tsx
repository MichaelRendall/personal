import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import classes from "./CharadeCard.module.scss";
import Button from "../FormElements/Button";

interface CharadeCardProps {
  category: string;
  charade: string;
  theme: string;
  clicked: () => void;
}

const CharadeCard: React.FC<CharadeCardProps> = (props) => {
  let icon: IconProp;
  if (props.category === "film") {
    icon = "film";
  } else if (props.category === "song") {
    icon = "music";
  } else if (props.category === "action") {
    icon = "running";
  } else {
    icon = "question";
  }

  return (
    <>
      <span className={classes.category}>
        <FontAwesomeIcon icon={["fas", icon]} className="icon" />
        <h3>{props.category.toString().toUpperCase()}</h3>
        <FontAwesomeIcon icon={["fas", icon]} className="icon" />
      </span>
      <h2>{props.charade}</h2>
      <Button onClick={props.clicked} name="Got it" />
    </>
  );
};

export default CharadeCard;
