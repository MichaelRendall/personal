import React from "react";
import FlagList from "../../models/flag-interface";
//import Button from "../FormElements/Button";
//import Input from "../FormElements/Input";
import classes from "./ActiveFlagControls.module.scss";

interface ActiveFlagProps {
  flags: FlagList[];
  currentFlag: number;
}

const ActiveFlagControls: React.FC<ActiveFlagProps> = (props) => {
  //const answerRef = useRef<HTMLInputElement>(null);

  return (
    <div className={classes.controls}>
      {/*  {!props.flags[props.currentFlag].correct && (
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
          <Button small name="Next" onClick={() => changeFlagHandler("plus")} />
        </>
      )}
      {props.flags[props.currentFlag].correct && (
        <p>{props.flags[props.currentFlag].name}</p>
      )} */}
    </div>
  );
};

export default ActiveFlagControls;
