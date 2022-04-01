import React, { useContext, useEffect } from "react";
import classes from "./Stopwatch.module.scss";
import { FlagContext } from "../../context/flag-context";

const Stopwatch: React.FC = () => {
  const flagCtx = useContext(FlagContext);
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (flagCtx.gameCompleted) {
      clearInterval(interval!);
    } else {
      interval = setInterval(() => {
        flagCtx.setTime(flagCtx.time + 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [flagCtx]);

  return (
    <p className={classes.stopwatch}>
      <span>{("0" + Math.floor((flagCtx.time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((flagCtx.time / 1000) % 60)).slice(-2)}</span>
    </p>
  );
};

export default Stopwatch;
