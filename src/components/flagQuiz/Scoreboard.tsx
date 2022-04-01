import React, { useContext, useEffect } from "react";
import classes from "./Scoreboard.module.scss";

import { FlagContext } from "../../context/flag-context";
import useFetch from "../../hooks/useFetch";

import Wrapper from "../UI/Wrapper";
import Spinner from "../UI/Spinner";
import Stopwatch from "../timer/Stopwatch";

const Scoreboard: React.FC = () => {
  const { isLoading, data, sendRequest } = useFetch();
  const flagCtx = useContext(FlagContext);

  useEffect(() => {
    const fetchScoreboard = async () => {
      sendRequest({
        url: `${
          process.env.REACT_APP_API_URL || "http://localhost:8080"
        }/flag-quiz/get-scoreboard`,
        method: "GET",
      });
    };
    fetchScoreboard();
  }, [sendRequest]);

  return (
    <Wrapper size="aside">
      <div className={classes.scoreboard__header}>
        <Stopwatch />
        <h2>
          {flagCtx.score}/{flagCtx.flags.length + flagCtx.completedFlags.length}
        </h2>
      </div>
      {isLoading && <Spinner />}
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
                    <small className={classes.time}>
                      <span>
                        {("0" + Math.floor((score.time / 60000) % 60)).slice(
                          -2
                        )}
                        :
                      </span>
                      <span>
                        {("0" + Math.floor((score.time / 1000) % 60)).slice(-2)}
                      </span>
                    </small>
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
