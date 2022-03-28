import React, { useContext } from "react";
import classes from "./ActiveFlag.module.scss";

import { FlagContext } from "../../context/flag-context";

import Wrapper from "../UI/Wrapper";
import ActiveFlagControls from "./ActiveFlagControls";

const ActiveFlag: React.FC = () => {
  const flagCtx = useContext(FlagContext);
  return (
    <Wrapper>
      <ActiveFlagControls />
      <img
        className={classes.flag}
        src={flagCtx.flags[flagCtx.currentFlag].src}
        alt={`flag of ${flagCtx.flags[flagCtx.currentFlag].name}`}
      />
    </Wrapper>
  );
};

export default ActiveFlag;
