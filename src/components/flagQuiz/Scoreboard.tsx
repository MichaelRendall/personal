import React, { useContext } from "react";
import { FlagContext } from "../../context/flag-context";
import Wrapper from "../UI/Wrapper";
//import classes from "./Scoreboard.module.scss";

const Scoreboard: React.FC = () => {
  const flagCtx = useContext(FlagContext);
  return (
    <Wrapper size="aside">
      <h2>
        {flagCtx.score}/{flagCtx.flags.length}
      </h2>
      leaderboard
    </Wrapper>
  );
};

export default Scoreboard;
