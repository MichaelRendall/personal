import React from "react";
import FlagList from "../../models/flag-interface";
import Wrapper from "../UI/Wrapper";
import classes from "./ActiveFlag.module.scss";

interface ActiveFlagProps {
  flags: FlagList[];
  currentFlag: number;
}

const ActiveFlag: React.FC<ActiveFlagProps> = (props) => {
  return (
    <Wrapper>
      <img
        className={classes.flag}
        src={props.flags[props.currentFlag].src}
        alt={`flag of ${props.flags[props.currentFlag].name}`}
      />
    </Wrapper>
  );
};

export default ActiveFlag;
