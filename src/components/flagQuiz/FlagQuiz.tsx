import React, { useContext } from "react";
import classes from "./FlagQuiz.module.scss";

import { FlagContext } from "../../context/flag-context";

import ActiveFlag from "./ActiveFlag";
import SubmitScore from "./SubmitScore";
import Thumbnails from "./Thumbnails";
import QuizInfo from "./QuizInfo";

interface FlagQuizProps {
  endGame: () => void;
}

const FlagQuiz: React.FC<FlagQuizProps> = (props) => {
  const flagCtx = useContext(FlagContext);

  return (
    <>
      <div className={classes.container}>
        {!flagCtx.gameCompleted && <ActiveFlag />}
        {flagCtx.gameCompleted && <SubmitScore endGame={props.endGame} />}
        <QuizInfo />
      </div>
      <Thumbnails />
    </>
  );
};

export default FlagQuiz;
