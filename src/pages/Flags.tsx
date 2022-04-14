import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { useAppDispatch } from "../store/hooks";
import { flagQuizActions } from "../store/flag-quiz/flag-quiz-slice";

import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import FlagList from "../models/flag-interface";
import FLAG_LIST from "../lib/flag-list";
import { colourOptions, continentOptions } from "../lib/filter-options";

import GameHeading from "../components/GameHeading/GameHeading";
import FlagQuiz from "../components/flagQuiz/FlagQuiz";

import { Container, GameSection } from "../components/UI";
import { Button, Select } from "../components/FormElements";

const Flags = () => {
  const dispatch = useAppDispatch();
  document.title = "Flags | Michael Rendall";
  console.log("loading Flags.tsx");

  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    themeCtx.changeTheme(Theme.BLUE);
  }, [themeCtx]);

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
    <GameSection>
      <GameHeading heading="FLAG QUIZ" showSettings>
        <Select
          id="continent"
          label="Continent"
          options={continentOptions}
          param="f-continent"
          placeholder="All Continents"
        />
        <Select
          id="colours"
          label="Colour"
          options={colourOptions}
          param="f-colours"
          placeholder="All Colours"
        />
      </GameHeading>
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
    </GameSection>
  );
};

export default Flags;
