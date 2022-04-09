import React from "react";
import classes from "./QuizInfo.module.scss";

import { useAppSelector } from "../../store/hooks";

import Wrapper from "../UI/Wrapper";
import Stopwatch from "../timer/Stopwatch";
import Scoreboard from "./Scoreboard";

const QuizInfo: React.FC = () => {
  const score = useAppSelector((state) => state.flagQuiz.score);
  const activeFlags = useAppSelector((state) => state.flagQuiz.activeFlags);
  const completedFlags = useAppSelector(
    (state) => state.flagQuiz.completedFlags
  );

  return (
    <Wrapper size="aside">
      <div className={classes.QuizInfo__header}>
        <Stopwatch />
        <h2>
          {score}/{activeFlags.length + completedFlags.length}
        </h2>
      </div>
      <Scoreboard />
    </Wrapper>
  );
};

export default QuizInfo;
