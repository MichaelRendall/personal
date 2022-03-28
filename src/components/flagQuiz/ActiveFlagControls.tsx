import React, { useContext } from "react";
import { FlagContext } from "../../context/flag-context";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import classes from "./ActiveFlagControls.module.scss";

const ActiveFlagControls: React.FC = () => {
  const flagCtx = useContext(FlagContext);

  return (
    <div className={classes.controls}>
      {!flagCtx.flags[flagCtx.currentFlag].correct && (
        <>
          <Button
            small
            name="Prev"
            onClick={() => flagCtx.changeFlagHandler("minus")}
          />
          <Input
            id="guess"
            type="text"
            refValue={flagCtx.answerRef!}
            onChange={flagCtx.answerHandler}
          />
          <Button
            small
            name="Next"
            onClick={() => flagCtx.changeFlagHandler("plus")}
          />
        </>
      )}
      {flagCtx.flags[flagCtx.currentFlag].correct && (
        <p>{flagCtx.flags[flagCtx.currentFlag].name}</p>
      )}
    </div>
  );
};

export default ActiveFlagControls;
