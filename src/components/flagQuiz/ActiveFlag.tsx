import React from "react";
import classes from "./ActiveFlag.module.scss";

import { useAppSelector } from "../../store/hooks";

import Wrapper from "../UI/Wrapper";
import ActiveFlagControls from "./ActiveFlagControls";

const ActiveFlag: React.FC = () => {
  const activeFlags = useAppSelector((state) => state.flagQuiz.activeFlags);
  const currentFlag = useAppSelector((state) => state.flagQuiz.currentFlag);

  console.log("ActiveFlag.tsx");
  return (
    <Wrapper>
      {activeFlags[currentFlag] && (
        <>
          <ActiveFlagControls />
          <div className={classes.flagContainer}>
            <img
              className={classes.flag}
              src={activeFlags[currentFlag].src}
              alt={`flag of ${activeFlags[currentFlag].name}`}
            />
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default ActiveFlag;
