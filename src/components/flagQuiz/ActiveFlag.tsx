import React from "react";
import { useAppSelector } from "../../store/hooks";

import classes from "./ActiveFlag.module.scss";

import Wrapper from "../UI/Wrapper";
import ActiveFlagControls from "./ActiveFlagControls";

const ActiveFlag: React.FC = () => {
  const activeFlags = useAppSelector((state) => state.flagQuiz.activeFlags);
  const currentFlag = useAppSelector((state) => state.flagQuiz.currentFlag);

  return (
    <Wrapper>
      {activeFlags[currentFlag] && (
        <>
          <ActiveFlagControls />
          <figure className={classes.flagContainer}>
            <img
              className="imageContain"
              src={activeFlags[currentFlag].src}
              alt={`flag of ${activeFlags[currentFlag].name}`}
            />
          </figure>
        </>
      )}
    </Wrapper>
  );
};

export default ActiveFlag;
