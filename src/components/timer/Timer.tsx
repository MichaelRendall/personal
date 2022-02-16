import React from "react";
import classes from "./Timer.module.scss";

interface TimerProps {
  timer: string;
}

const Timer: React.FC<TimerProps> = (props) => {
  return (
    <span className={classes.timer}>
      <span>&#8987;</span>
      <p className={`${props.timer <= "0:10" ? classes.warning : ""} `}>
        {props.timer}
      </p>
    </span>
  );
};

export default Timer;
