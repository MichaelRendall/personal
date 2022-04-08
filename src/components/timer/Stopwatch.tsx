import React, { useContext, useEffect, useState } from "react";
import classes from "./Stopwatch.module.scss";
import { FlagContext } from "../../context/flag-context";

const Stopwatch: React.FC = () => {
  const flagCtx = useContext(FlagContext);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (flagCtx.gameCompleted) {
      clearInterval(interval!);
      flagCtx.setTime(time);
    } else {
      interval = setInterval(() => {
        setTime(time + 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [flagCtx, time, setTime]);

  return (
    <p className={classes.stopwatch}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </p>
  );
};

export default Stopwatch;
