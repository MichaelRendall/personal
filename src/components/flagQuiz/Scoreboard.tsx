import React, { useContext, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { ThemeContext } from "../../context/theme-context";
import { useLocation } from "react-router";

import classes from "./Scoreboard.module.scss";

import useFetch from "../../hooks/useFetch";

import Spinner from "../UI/Spinner";

const Scoreboard: React.FC = () => {
  console.log("loading Scoreboard.tsx");
  const { isLoading, error, data, sendRequest } = useFetch();
  const location = useLocation();
  const themeCtx = useContext(ThemeContext);
  const scoreSubmitted = useAppSelector(
    (state) => state.flagQuiz.scoreSubmitted
  );

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
  }, [sendRequest, location.search, scoreSubmitted]);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <small>{error}</small>}
      {data?.flagScores && (
        <div className={`${classes.scoreboard} ${classes[themeCtx.theme]}`}>
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
    </>
  );
};

export default Scoreboard;
