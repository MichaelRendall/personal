import React, { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";

import classes from "./ActiveFlagControls.module.scss";

import { Button, Input } from "../FormElements";

const ActiveFlagControls: React.FC = () => {
  console.log("loading ActiveFlagControls.tsx");
  const answerRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const activeFlags = useAppSelector((state) => state.flagQuiz.activeFlags);
  const completedFlags = useAppSelector(
    (state) => state.flagQuiz.completedFlags
  );
  const currentFlag = useAppSelector((state) => state.flagQuiz.currentFlag);

  useEffect(() => {
    answerRef.current!.value = "";
  }, [currentFlag]);

  const checkAnswerHandler = () => {
    if (
      answerRef.current?.value.toLowerCase() ===
      activeFlags[currentFlag].name.toLowerCase()
    ) {
      answerRef.current.value = "";
      const updatedCompletedFlags = completedFlags.concat(
        activeFlags[currentFlag]
      );

      const updatedActiveFlags = activeFlags.filter(
        (_, index) => index !== currentFlag
      );

      dispatch(
        flagQuizActions.correctAnswer({
          activeFlags: updatedActiveFlags,
          completedFlags: updatedCompletedFlags,
          score: updatedCompletedFlags.length,
        })
      );

      if (updatedActiveFlags.length === 0) {
        dispatch(flagQuizActions.completedGame());
      } else {
        dispatch(flagQuizActions.nextFlag("plus"));
      }
    }
  };

  return (
    <div className={classes.controls}>
      <Button
        small
        name="Prev"
        onClick={() => dispatch(flagQuizActions.nextFlag("minus"))}
      />
      <Input
        id="guess"
        type="text"
        refValue={answerRef}
        onChange={checkAnswerHandler}
      />
      <Button
        small
        name="Next"
        onClick={() => dispatch(flagQuizActions.nextFlag("plus"))}
      />
    </div>
  );
};

export default ActiveFlagControls;
