import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./CharadeCard.module.scss";
import Button from "../FormElements/Button";

const CharadeCard = (props) => {
  let icon;
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
    <div className={classes.charadeCard}>
      <span className={classes.category}>
        <FontAwesomeIcon icon={["fas", icon]} className="icon" />
        <h3>{props.category.toUpperCase()}</h3>
        <FontAwesomeIcon icon={["fas", icon]} className="icon" />
      </span>
      <h2>{props.charade}</h2>
      <Button onClick={props.clicked} name="Got it" />
    </div>
  );
};

export default CharadeCard;
