import React, { useState } from "react";
import { useLocation } from "react-router";

import Input from "../components/FormElements/Input";
import GameHeading from "../components/GameHeading/GameHeading";
import CHARADE_LIST from "../lib/charade-list";
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
  { value: "30s", label: "30 Seconds" },
  { value: "1m", label: "1 Minute" },
  { value: "2m", label: "2 Minutes" },
  { value: "5m", label: "5 Minutes" },
];

const Charades = () => {
  const [charade, setCharade] = useState();
  const [theme, setTheme] = useState();
  const [category, setCategory] = useState();
  const location = useLocation();

  const getCharadeHandler = () => {
    let activeCharades = CHARADE_LIST;

    const queryParams = new URLSearchParams(location.search);
    const filters = queryParams.entries();

    for (const filter of filters) {
      activeCharades = activeCharades.filter(
        (singleCharade) => singleCharade[filter[0]] === filter[1]
      );
    }

    if (activeCharades.length === 0) {
      setCharade("all gone");
      setTheme();
      setCategory();
      return;
    }
	
    const charade =
      activeCharades[Math.floor(Math.random() * activeCharades.length)];

    setCharade(charade.name);
    setTheme(charade.theme);
    setCategory(charade.cat);
  };

  return (
    <>
      <GameHeading heading="CHARADES">
        <Input
          element="select"
          options={themeOptions}
          isSearchable={false}
          isClearable={true}
          placeholder="Standard"
          label="Theme"
          param="theme"
        />
        <Input
          element="select"
          options={categoryOptions}
          isSearchable={true}
          isClearable={true}
          placeholder="All Categories"
          label="Category"
          param="cat"
        />
        <Input
          element="select"
          options={timerOptions}
          isClearable={true}
          placeholder="No Limits"
          label="Time Limit"
          param="time"
        />
      </GameHeading>
      <button onClick={getCharadeHandler}>click</button>
      <p>{charade}</p>
      <p>{theme}</p>
      <p>{category}</p>
    </>
  );
};

export default Charades;
