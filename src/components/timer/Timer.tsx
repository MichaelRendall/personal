import React from "react";
import classes from "./Timer.module.scss";
import { ImHourGlass } from "react-icons/im";
import { Wrapper } from "../UI";

interface TimerProps {
  timer: string;
}

const Timer: React.FC<TimerProps> = (props) => {
  return (
    <Wrapper size="auto" type="small">
      <span className={classes.timer}>
        <ImHourGlass />
        <p className={`${props.timer <= "0:10" && classes.warning} `}>
          {props.timer}
        </p>
      </span>
    </Wrapper>
  );
};

export default Timer;
