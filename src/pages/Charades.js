import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import useTimer from "../hooks/useTimer";
import CharadeCard from "../components/charades/CharadeCard";

import Input from "../components/FormElements/Input";
import GameHeading from "../components/GameHeading/GameHeading";
import CHARADE_LIST from "../lib/charade-list";
import Button from "../components/FormElements/Button";
import GameSection from "../components/UI/GameSection";
import Timer from "../components/timer/Timer";
//import classes from "./Charades.module.scss";

const themeOptions = [
  { value: "festive", label: "Festive" },
  { value: "easter", label: "Easter" },
];

const categoryOptions = [
  { value: "film", label: "Films" },
  { value: "song", label: "Songs" },
  { value: "action", label: "Actions" },
  { value: "misc", label: "Miscellaneous" },
];

const timerOptions = [
  { value: "30", label: "30 Seconds" },
  { value: "60", label: "1 Minute" },
  { value: "120", label: "2 Minutes" },
  { value: "300", label: "5 Minutes" },
];

const Charades = () => {
  document.title = "Charades";

  const [charadeList, setCharadeList] = useState();
  const [charade, setCharade] = useState();
  const [theme, setTheme] = useState();
  const [category, setCategory] = useState();
  const [startingTime, setStartingTime] = useState(null);
  const location = useLocation();

  const [timerVisual, timerActive, setTimerActive, setTimeDeadlineHandler] =
    useTimer();

  useEffect(() => {
    setTimerActive(false);
    setCharade();
    setStartingTime(null);

    let activeCharades = CHARADE_LIST;

    const queryParams = new URLSearchParams(location.search);
    const filters = queryParams.entries();

    for (const filter of filters) {
      const filterName = filter[0].split("-");

      if (filterName[0] === "f") {
        activeCharades = activeCharades.filter(
          (singleCharade) => singleCharade[filterName[1]] === filter[1]
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
    setCharade();
    setTheme();
    setCategory();
  };

  const getCharadeHandler = (activeCharades) => {
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
      setCharade();
      setTheme();
      setCategory();
    }
  }, [timerActive]);

  return (
    <GameSection>
      <GameHeading heading="CHARADES">
        <Input
          element="select"
          options={themeOptions}
          isSearchable={false}
          isClearable={true}
          placeholder="Standard"
          label="Theme"
          param="f-theme"
        />
        <Input
          element="select"
          options={categoryOptions}
          isSearchable={true}
          isClearable={true}
          placeholder="All Categories"
          label="Category"
          param="f-cat"
        />
        <Input
          element="select"
          options={timerOptions}
          isClearable={true}
          placeholder="No Limits"
          label="Time Limit"
          param="n-time"
        />
      </GameHeading>
      {startingTime && <Timer timer={timerVisual} />}
      {!charade && <Button onClick={startGameHandler} name="Begin" large />}
      {charade && (
        <CharadeCard
          category={category}
          charade={charade}
          theme={theme}
          clicked={endGameHandler}
        />
      )}
    </GameSection>
  );
};

export default Charades;
