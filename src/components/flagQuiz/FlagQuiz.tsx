import React, { useContext } from "react";
import classes from "./FlagQuiz.module.scss";
import Thumbnails from "./Thumbnails";
import Scoreboard from "./Scoreboard";
import { FlagContext } from "../../context/flag-context";
import SubmitScore from "./SubmitScore";
import ActiveFlag from "./ActiveFlag";

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
