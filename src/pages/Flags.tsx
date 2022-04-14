import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import { colourOptions, continentOptions } from "../lib/filter-options";

import GameHeading from "../components/GameHeading/GameHeading";

import { GameSection } from "../components/UI";
import { Select } from "../components/FormElements";
import QuizContainer from "../components/flagQuiz/QuizContainer";

const Flags = () => {
  document.title = "Flags | Michael Rendall";
  console.log("loading Flags.tsx");

  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    themeCtx.changeTheme(Theme.BLUE);
  }, [themeCtx]);

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
      <QuizContainer />
    </GameSection>
  );
};

export default Flags;
