import React, { useEffect, useState } from "react";
import classes from "./Stopwatch.module.scss";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";

const Stopwatch: React.FC = () => {
  const dispatch = useAppDispatch();
  const gameCompleted = useAppSelector((state) => state.flagQuiz.gameCompleted);

  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (gameCompleted) {
      clearInterval(interval!);
      dispatch(flagQuizActions.setTime(time));
    } else {
      interval = setInterval(() => {
        setTime(time + 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameCompleted, time, setTime, dispatch]);

  return (
    <p className={classes.stopwatch}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </p>
  );
};

export default Stopwatch;
