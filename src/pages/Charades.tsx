import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import useTimer from "../hooks/useTimer";
import Wrapper from "../components/UI/Wrapper";
import CharadeCard from "../components/charades/CharadeCard";

import GameHeading from "../components/GameHeading/GameHeading";
import CHARADE_LIST from "../lib/charade-list";
import Button from "../components/FormElements/Button";
import GameSection from "../components/UI/GameSection";
import Timer from "../components/timer/Timer";
import {
  themeOptions,
  categoryOptions,
  timerOptions,
} from "../lib/filter-options";
import Select from "../components/FormElements/Select";

interface CharadeList {
  [key: string]: string;
  name: string;
  theme: string;
  cat: string;
}

const Charades = () => {
  document.title = "Charades | Michael Rendall";

  const [charadeList, setCharadeList] = useState<CharadeList[]>([]);
  const [charade, setCharade] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [startingTime, setStartingTime] = useState<string | null>(null);
  const location = useLocation();

  const [timerVisual, timerActive, setTimerActive, setTimeDeadlineHandler] =
    useTimer();

  useEffect(() => {
    setTimerActive(false);
    setCharade(null);
    setStartingTime(null);

    let activeCharades = CHARADE_LIST;

    const queryParams = new URLSearchParams(location.search);
    const filters = queryParams.entries();

    for (const filter of filters) {
      const filterName = filter[0].split("-");

      if (filterName[0] === "f") {
        activeCharades = activeCharades.filter(
          (singleCharade: CharadeList) =>
            singleCharade[filterName[1]] === filter[1]
        );
      } else if (filterName[0] === "n" && filterName[1] === "time") {
        setStartingTime(filter[1]);
        setTimeDeadlineHandler(filter[1]);
      }
    }

    setCharadeList(activeCharades);
  }, [
    location.search,
    setTimerActive,
    setTimeDeadlineHandler,
    setStartingTime,
  ]);

  const startGameHandler = () => {
    if (startingTime !== null) {
      setTimerActive(true);
      setTimeDeadlineHandler(startingTime);
    }

    getCharadeHandler(charadeList);
  };

  const endGameHandler = () => {
    if (startingTime !== null) {
      setTimerActive(false);
      setTimeDeadlineHandler(startingTime);
    }
    setCharade(null);
    setTheme(null);
    setCategory(null);
  };

  const getCharadeHandler = (activeCharades: CharadeList[]) => {
    if (activeCharades.length === 0) {
      setCharade("There's none left!");
      setTheme("sorry");
      setCategory("sorry");
      return;
    }

    const charade =
      activeCharades[Math.floor(Math.random() * activeCharades.length)];

    setCharade(charade.name);
    setTheme(charade.theme);
    setCategory(charade.cat);
  };

  useEffect(() => {
    if (timerActive === false) {
      setCharade(null);
      setTheme(null);
      setCategory(null);
    }
  }, [timerActive]);

  return (
    <GameSection theme="pink">
      <GameHeading heading="CHARADES">
        {
          <>
            <Select
              id="theme"
              label="Theme"
              options={themeOptions}
              param="f-theme"
            />
            <Select
              id="category"
              label="Category"
              options={categoryOptions}
              param="f-cat"
            />
            <Select
              id="timer"
              label="Timer"
              options={timerOptions}
              param="n-time"
            />
          </>
        }
      </GameHeading>
      {startingTime && <Timer timer={timerVisual} />}
      {!charade && <Button onClick={startGameHandler} name="Begin" large />}
      {charade && (
        <Wrapper>
          <CharadeCard
            category={category!}
            charade={charade}
            theme={theme!}
            clicked={endGameHandler}
          />
        </Wrapper>
      )}
    </GameSection>
  );
};

export default Charades;
