import React, { useRef, useState } from "react";
import Wrapper from "../UI/Wrapper";
import FlagList from "../../models/flag-interface";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import classes from "./FlagCard.module.scss";
import Form from "../FormElements/Form";

interface FlagCardProps {
  flags: FlagList[];
  endGame: () => void;
}

const FlagCard: React.FC<FlagCardProps> = (props) => {
  const [currentFlag, setCurrentFlag] = useState(0);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const answerRef = useRef<HTMLInputElement>(null);

  const changeFlagHandler = (direction: string) => {
    answerRef.current!.value = "";
    const arrayLength = props.flags.length;
    let newFlag = direction === "plus" ? currentFlag + 1 : currentFlag - 1;

    if (newFlag < 0) {
      newFlag = arrayLength - 1;
    }
    if (newFlag === arrayLength) {
      newFlag = 0;
    }

    setCurrentFlag(newFlag);
  };

  const answerHandler = () => {
    if (
      answerRef.current?.value.toLowerCase() ===
      props.flags[currentFlag].name.toLowerCase()
    ) {
      console.log("correct");
      props.flags[currentFlag].correct = true;

      const completedFlags = props.flags.filter((flag) => flag.correct);
      if (completedFlags.length === props.flags.length) {
        setGameCompleted(true);
      }

      setScore(completedFlags.length);
      changeFlagHandler("plus");
    }
  };

  const submitScore = () => {};

  const thumbnails = props.flags.map((flag, index) => {
    return (
      <span
        key={flag.name}
        className={`${classes.thumb} ${
          index === currentFlag ? classes.active : ""
        } ${flag.correct ? classes.correct : ""}`}
        onClick={() => setCurrentFlag(index)}
      >
        <img src={flag.thumb} alt={`thumbnail for ${flag.name}`} />
      </span>
    );
  });

  return (
    <>
      <div className={classes.container}>
        <Wrapper size="aside">
          <h2>
            {score}/{props.flags.length}
          </h2>
          leaderboard
        </Wrapper>
        {!gameCompleted && (
          <Wrapper>
            <div className={classes.controls}>
              {!props.flags[currentFlag].correct && (
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
              {props.flags[currentFlag].correct && (
                <p>{props.flags[currentFlag].name}</p>
              )}
            </div>
            <img
              className={classes.flag}
              src={props.flags[currentFlag].src}
              alt={`flag of ${props.flags[currentFlag].name}`}
            />
          </Wrapper>
        )}
        {gameCompleted && (
          <Wrapper>
            <h2>Congratulations!</h2>
            <Form onSubmit={submitScore}>
              <Input id="nickname" placeholder="Nickname" type="text" label="Nickname" />
              <Button name="Submit Score" submit fullWidth />
            </Form>
          </Wrapper>
        )}
      </div>
      <Wrapper size="auto">
        <div className={classes.thumbs}>{thumbnails}</div>
      </Wrapper>
    </>
  );
};

export default FlagCard;
