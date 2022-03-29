import React, { useContext } from "react";
import classes from "./ActiveFlagControls.module.scss";

import { FlagContext } from "../../context/flag-context";

import Input from "../FormElements/Input";
import Button from "../FormElements/Button";

const ActiveFlagControls: React.FC = () => {
  const flagCtx = useContext(FlagContext);

  return (
    <div className={classes.controls}>
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
    </div>
  );
};

export default ActiveFlagControls;
