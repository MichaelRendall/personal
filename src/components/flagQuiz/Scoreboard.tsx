import React, { useContext, useEffect } from "react";
import classes from "./Scoreboard.module.scss";

import { FlagContext } from "../../context/flag-context";
import useFetch from "../../hooks/useFetch";

import Wrapper from "../UI/Wrapper";

const Scoreboard: React.FC = () => {
  //const [scores, setScores] = useState([]);
  const { data, sendRequest } = useFetch();
  const flagCtx = useContext(FlagContext);

  useEffect(() => {
    const fetchScoreboard = async () => {
      sendRequest({
        url: `http://localhost:8080/flag-quiz/get-scoreboard`,
        method: "GET",
      });
    };
    fetchScoreboard();
  }, [sendRequest]);

  return (
    <Wrapper size="aside">
      <h2>
        {flagCtx.score}/{flagCtx.flags.length + flagCtx.completedFlags.length}
      </h2>
      {data?.flagScores && (
        <div className={classes.scoreboard}>
          <h3>Leaderboard</h3>
          <div className={classes.scoreboard__list}>
            {data.flagScores.map((score) => {
              return (
                <div
                  key={score.nickname}
                  className={classes.scoreboard__single}
                >
                  <p className={classes.name}>{score.nickname}</p>
                  <div className={classes.scoreTime}>
                    <small className={classes.time}>9:50</small>
                    <p className={classes.score}>{score.score}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Scoreboard;
