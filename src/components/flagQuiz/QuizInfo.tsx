import React, { useContext } from "react";
import classes from "./QuizInfo.module.scss";

import { FlagContext } from "../../context/flag-context";
import Wrapper from "../UI/Wrapper";
import Stopwatch from "../timer/Stopwatch";
import Scoreboard from "./Scoreboard";

const QuizInfo: React.FC = () => {
  const flagCtx = useContext(FlagContext);

  return (
    <Wrapper size="aside">
      <div className={classes.QuizInfo__header}>
        <Stopwatch />
        <h2>
          {flagCtx.score}/{flagCtx.flags.length + flagCtx.completedFlags.length}
        </h2>
      </div>
      <Scoreboard />
    </Wrapper>
  );
};

export default QuizInfo;
