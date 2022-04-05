import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import classes from "./Scoreboard.module.scss";

import { FlagContext } from "../../context/flag-context";
import useFetch from "../../hooks/useFetch";

import Wrapper from "../UI/Wrapper";
import Spinner from "../UI/Spinner";
import Stopwatch from "../timer/Stopwatch";

const Scoreboard: React.FC = () => {
  const { isLoading, error, data, sendRequest } = useFetch();
  const flagCtx = useContext(FlagContext);
  const location = useLocation();

  useEffect(() => {
    const fetchScoreboard = async () => {
      const queryParams = new URLSearchParams(location.search);
      const filters = queryParams.entries();

      let filterList = { continent: "all" };
      for (const filter of filters) {
        const filterName = filter[0].split("-");

        filterList = { ...filterList, [filterName[1]]: filter[1] };
      }

      sendRequest({
        url: `${
          process.env.REACT_APP_API_URL || "http://localhost:8080"
        }/flag-quiz/get-scoreboard`,
        method: "POST",
        body: {
          filter: filterList,
        },
      });
    };
    fetchScoreboard();
  }, [sendRequest, location.search]);

  return (
    <Wrapper size="aside">
      <div className={classes.scoreboard__header}>
        <Stopwatch />
        <h2>
          {flagCtx.score}/{flagCtx.flags.length + flagCtx.completedFlags.length}
        </h2>
      </div>
      {isLoading && <Spinner />}
      {error && <small>{error}</small>}
      {data?.flagScores && (
        <div className={classes.scoreboard}>
          <h3>Leaderboard</h3>
          {data.flagScores.length > 0 && (
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
                          {("0" + Math.floor((score.time / 1000) % 60)).slice(
                            -2
                          )}
                        </span>
                      </small>
                      <p className={classes.score}>{score.score}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {data.flagScores.length === 0 && <small>No Scores Set</small>}
        </div>
      )}
    </Wrapper>
  );
};

export default Scoreboard;
