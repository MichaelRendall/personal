import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <Link to={props.url} className={classes.card}>
      <div className={classes.card_heading}>
        <h2>{props.header}</h2>
      </div>
    </Link>
  );
};

export default Card;
