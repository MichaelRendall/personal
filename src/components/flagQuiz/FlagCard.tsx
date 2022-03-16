import React, { useState } from "react";
import Wrapper from "../UI/Wrapper";
import FlagList from "../../models/flag-interface";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import classes from "./FlagCard.module.scss";

interface FlagCardProps {
  flags: FlagList[];
}

const FlagCard: React.FC<FlagCardProps> = (props) => {
  const [currentFlag, setCurrentFlag] = useState(0);

  const changeFlagHandler = (direction: string) => {
    const arrayLength = props.flags.length;
    const newFlag = direction === "plus" ? currentFlag + 1 : currentFlag - 1;

    if (newFlag < 0) {
      return setCurrentFlag(arrayLength - 1);
    }
    if (newFlag === arrayLength) {
      return setCurrentFlag(0);
    }

    setCurrentFlag(newFlag);
  };

  const thumbnails = props.flags.map((flag) => (
    <span key={flag.name} className={classes.thumb}>
      <img src={flag.thumb} alt={`thumbnail for ${flag.name}`} />
    </span>
  ));

  return (
    <div className={classes.container}>
      <Wrapper>
        <div className={classes.thumbs}>{thumbnails}</div>
      </Wrapper>
      <Wrapper>
        <div className={classes.controls}>
          <Button
            small
            name="Prev"
            onClick={() => changeFlagHandler("minus")}
          />
          <Input id="guess" type="text" />
          <Button small name="Next" onClick={() => changeFlagHandler("plus")} />
        </div>
        <img
          className={classes.flag}
          src={props.flags[currentFlag].src}
          alt={`flag of ${props.flags[currentFlag].name}`}
        />
      </Wrapper>
      <Wrapper>leaderboard</Wrapper>
    </div>
  );
};

export default FlagCard;
