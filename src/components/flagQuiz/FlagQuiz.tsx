import React, { useContext, useRef } from "react";
import Wrapper from "../UI/Wrapper";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import classes from "./FlagQuiz.module.scss";
import Thumbnails from "./Thumbnails";
import Scoreboard from "./Scoreboard";
import { FlagContext } from "../../context/flag-context";
import SubmitScore from "./SubmitScore";

interface FlagQuizProps {
  endGame: () => void;
}

const FlagQuiz: React.FC<FlagQuizProps> = (props) => {
  const flagCtx = useContext(FlagContext);
  const answerRef = useRef<HTMLInputElement>(null);

  const changeFlagHandler = (direction: string) => {
    answerRef.current!.value = "";
    const arrayLength = flagCtx.flags.length;
    let newFlag =
      direction === "plus" ? flagCtx.currentFlag + 1 : flagCtx.currentFlag - 1;

    if (newFlag < 0) {
      newFlag = arrayLength - 1;
    }
    if (newFlag === arrayLength) {
      newFlag = 0;
    }

    flagCtx.setCurrentFlag(newFlag);
  };

  const answerHandler = () => {
    if (
      answerRef.current?.value.toLowerCase() ===
      flagCtx.flags[flagCtx.currentFlag].name.toLowerCase()
    ) {
      console.log("correct");
      flagCtx.flags[flagCtx.currentFlag].correct = true;

      const completedFlags = flagCtx.flags.filter((flag) => flag.correct);
      if (completedFlags.length === flagCtx.flags.length) {
        flagCtx.setGameCompleted(true);
      }

      flagCtx.setScore(completedFlags.length);
      changeFlagHandler("plus");
    }
  };

  return (
    <>
      <div className={classes.container}>
        <Scoreboard />
        {!flagCtx.gameCompleted && (
          <Wrapper>
            <div className={classes.controls}>
              {!flagCtx.flags[flagCtx.currentFlag].correct && (
                <>
                  <Button
                    small
                    name="Prev"
                    onClick={() => changeFlagHandler("minus")}
                  />
                  <Input
                    id="guess"
                    type="text"
                    refValue={answerRef}
                    onChange={answerHandler}
                  />
                  <Button
                    small
                    name="Next"
                    onClick={() => changeFlagHandler("plus")}
                  />
                </>
              )}
              {flagCtx.flags[flagCtx.currentFlag].correct && (
                <p>{flagCtx.flags[flagCtx.currentFlag].name}</p>
              )}
            </div>
            <img
              className={classes.flag}
              src={flagCtx.flags[flagCtx.currentFlag].src}
              alt={`flag of ${flagCtx.flags[flagCtx.currentFlag].name}`}
            />
          </Wrapper>
        )}
        {flagCtx.gameCompleted && <SubmitScore />}
      </div>
      <Thumbnails />
    </>
  );
};

export default FlagQuiz;
