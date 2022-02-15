import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.scss";

interface CardProps {
  url: string;
  header: string;
  unfinished?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Link to={props.url} className={classes.card}>
      <div className={classes.card_heading}>
        <h2>{props.header.toUpperCase()}</h2>
        {props.unfinished && <small>COMING SOON</small>}
      </div>
    </Link>
  );
};

export default Card;
