import React, { useContext } from "react";
//import classes from "./Scoreboard.module.scss";

import { FlagContext } from "../../context/flag-context";

import Wrapper from "../UI/Wrapper";

const Scoreboard: React.FC = () => {
  const flagCtx = useContext(FlagContext);
  return (
    <Wrapper size="aside">
      <h2>
        {flagCtx.score}/{flagCtx.flags.length + flagCtx.completedFlags.length}
      </h2>
      leaderboard
    </Wrapper>
  );
};

export default Scoreboard;
