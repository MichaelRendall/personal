import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router";

import { FlagContext } from "../context/flag-context";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import FlagList from "../models/flag-interface";
import FLAG_LIST from "../lib/flag-list";

import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Container from "../components/UI/Container";
import FlagQuiz from "../components/flagQuiz/FlagQuiz";
import Button from "../components/FormElements/Button";
import Select from "../components/FormElements/Select";
import { continentOptions } from "../lib/filter-options";

const Flags = () => {
  document.title = "Flags | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  const flagCtx = useContext(FlagContext);
  console.log("loading Flags.tsx");
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
        activeFlags = activeFlags.filter(
          (singleFlag: FlagList) => singleFlag[filterName[1]] === filter[1]
        );
      }
    }

    setFlags(activeFlags);
  }, [location.search]);

  const startGameHandler = () => {
    if (flags.length > 0) {
      const flagOrder = shuffleListHandler(flags);
      flagCtx.setFlags(flagOrder);
      flagCtx.setGameCompleted(false);
      flagCtx.setScore(0);
      flagCtx.setTime(0);
      flagCtx.setCompletedFlags([]);
      setGameRunning(true);
    }
  };

  const endGameHandler = () => {
    setGameRunning(false);
  };

  const shuffleListHandler = (list: FlagList[]) => {
    let currentIndex = list.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [list[currentIndex], list[randomIndex]] = [
        list[randomIndex],
        list[currentIndex],
      ];
    }

    return list;
  };

  return (
    <GameSection>
      <GameHeading heading="FLAG QUIZ" showSettings>
        <Select
          id="continent"
          label="Continent"
          options={continentOptions}
          param="f-continent"
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
