import React, { useContext } from "react";
import classes from "./FlagQuiz.module.scss";

import { FlagContext } from "../../context/flag-context";

import Scoreboard from "./Scoreboard";
import ActiveFlag from "./ActiveFlag";
import SubmitScore from "./SubmitScore";
import Thumbnails from "./Thumbnails";

interface FlagQuizProps {
  endGame: () => void;
}

const FlagQuiz: React.FC<FlagQuizProps> = (props) => {
  const flagCtx = useContext(FlagContext);

  return (
    <>
      <div className={classes.container}>
        <Scoreboard />
        {!flagCtx.gameCompleted && <ActiveFlag />}
        {flagCtx.gameCompleted && <SubmitScore />}
      </div>
      <Thumbnails />
    </>
  );
};

export default FlagQuiz;
