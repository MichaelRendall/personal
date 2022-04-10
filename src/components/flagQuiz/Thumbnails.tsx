import React, { useContext } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";
import { ThemeContext } from "../../context/theme-context";

import classes from "./Thumbnails.module.scss";

import Wrapper from "../UI/Wrapper";

const Thumbnails: React.FC = () => {
  console.log("loading Thumbnails.tsx");
  const themeCtx = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const activeFlags = useAppSelector((state) => state.flagQuiz.activeFlags);
  const completedFlags = useAppSelector(
    (state) => state.flagQuiz.completedFlags
  );
  const currentFlag = useAppSelector((state) => state.flagQuiz.currentFlag);

  const thumbnails = activeFlags.map((flag, index) => {
    return (
      <span
        key={flag.name}
        className={`${classes.thumb} ${
          index === currentFlag ? classes.active : ""
        }`}
        onClick={() => dispatch(flagQuizActions.changeFlag(index))}
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
      <div className={`${classes.thumbs} ${classes[themeCtx.theme]}`}>
        {thumbnails}
        {thumbnailsCompleted}
      </div>
    </Wrapper>
  );
};

export default Thumbnails;
