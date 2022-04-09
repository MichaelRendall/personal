import React from "react";
import { useAppSelector } from "../../store/hooks";

import classes from "./FlagQuiz.module.scss";

import ActiveFlag from "./ActiveFlag";
import SubmitScore from "./SubmitScore";
import Thumbnails from "./Thumbnails";
import QuizInfo from "./QuizInfo";

interface FlagQuizProps {
  endGame: () => void;
}

const FlagQuiz: React.FC<FlagQuizProps> = (props) => {
  const gameCompleted = useAppSelector((state) => state.flagQuiz.gameCompleted);

  return (
    <>
      <div className={classes.container}>
        {!gameCompleted && <ActiveFlag />}
        {gameCompleted && <SubmitScore endGame={props.endGame} />}
        <QuizInfo />
      </div>
      <Thumbnails />
    </>
  );
};

export default FlagQuiz;
