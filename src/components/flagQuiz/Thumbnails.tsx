import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";

import classes from "./Thumbnails.module.scss";

import Wrapper from "../UI/Wrapper";

const Thumbnails: React.FC = () => {
  console.log("loading Thumbnails.tsx");
  const dispatch = useAppDispatch();
  const gameCompleted = useAppSelector((state) => state.flagQuiz.gameCompleted);
  const activeFlags = useAppSelector((state) => state.flagQuiz.activeFlags);
  const completedFlags = useAppSelector(
    (state) => state.flagQuiz.completedFlags
  );
  const currentFlag = useAppSelector((state) => state.flagQuiz.currentFlag);

  const thumbnails = activeFlags.map((flag, index) => {
    const changeFlagHandler = () => {
      if (gameCompleted) {
        return;
      }
      dispatch(flagQuizActions.changeFlag(index));
    };

    return (
      <span
        key={flag.name}
        className={`${classes.thumb} ${
          index === currentFlag && !gameCompleted && classes.active
        } ${gameCompleted && classes.incorrect}`}
        onClick={changeFlagHandler}
      >
        <img src={flag.thumb} alt={`thumbnail for ${flag.name}`} />
      </span>
    );
  });

  const thumbnailsCompleted = completedFlags.map((flag, index) => {
    return (
      <span key={flag.name} className={`${classes.thumb} ${classes.correct}`}>
        <img src={flag.thumb} alt={`thumbnail for ${flag.name}`} />
      </span>
    );
  });

  return (
    <Wrapper size="auto">
      <div className={`${classes.thumbs}`}>
        {thumbnails}
        {thumbnailsCompleted}
      </div>
    </Wrapper>
  );
};

export default Thumbnails;
