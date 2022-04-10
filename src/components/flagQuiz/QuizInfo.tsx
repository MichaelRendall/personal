import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";

import classes from "./QuizInfo.module.scss";

import Wrapper from "../UI/Wrapper";
import Stopwatch from "../timer/Stopwatch";
import Scoreboard from "./Scoreboard";

const QuizInfo: React.FC = () => {
  console.log("loading QuizInfo.tsx");
  const dispatch = useAppDispatch();
  const gameCompleted = useAppSelector((state) => state.flagQuiz.gameCompleted);
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
        {!gameCompleted && (
          <small onClick={() => dispatch(flagQuizActions.completedGame())}>
            Give Up?
          </small>
        )}
      </div>
      <Scoreboard />
    </Wrapper>
  );
};

export default QuizInfo;
