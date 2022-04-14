import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";

import FlagList from "../../models/flag-interface";
import FLAG_LIST from "../../lib/flag-list";

import FlagQuiz from "../flagQuiz/FlagQuiz";

import { Container } from "../UI";
import { Button } from "../FormElements";

const QuizContainer = () => {
  const dispatch = useAppDispatch();
  const [gameRunning, setGameRunning] = useState(false);
  const [flags, setFlags] = useState(FLAG_LIST);
  const location = useLocation();

  useEffect(() => {
    setGameRunning(false);

    let activeFlags = FLAG_LIST;

    const queryParams = new URLSearchParams(location.search);
    const filters = queryParams.entries();

    for (const filter of filters) {
      const filterName = filter[0].split("-");

      if (filterName[0] === "f") {
        activeFlags = activeFlags.filter((singleFlag: any) => {
          if (Array.isArray(singleFlag[filterName[1]])) {
            return singleFlag[filterName[1]].includes(filter[1]);
          }
          return singleFlag[filterName[1]] === filter[1];
        });
      }
    }

    setFlags(activeFlags);
  }, [location.search]);

  const startGameHandler = () => {
    if (flags.length > 0) {
      const flagOrder = shuffleListHandler(flags);

      dispatch(flagQuizActions.resetGame({ activeFlags: flagOrder }));
      setGameRunning(true);
    }
  };

  const endGameHandler = () => {
    setGameRunning(false);
  };

  const shuffleListHandler = (list: FlagList[]) => {
    const newList = [...list];
    let currentIndex = newList.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [newList[currentIndex], newList[randomIndex]] = [
        newList[randomIndex],
        newList[currentIndex],
      ];
    }

    return newList;
  };

  return (
    <Container>
      {!gameRunning && (
        <Button
          onClick={startGameHandler}
          name="Begin"
          large
          disabled={flags.length === 0}
        />
      )}
      {gameRunning && <FlagQuiz endGame={endGameHandler} />}
      {flags.length === 0 && (
        <small>
          <b>Not Enough Flags!</b>
        </small>
      )}
    </Container>
  );
};

export default QuizContainer;
