import { memo } from "react";
import { colourOptions, continentOptions } from "../lib/filter-options";

import GameHeading from "../components/GameHeading/GameHeading";

import { GameSection } from "../components/UI";
import { Select } from "../components/FormElements";
import QuizContainer from "../components/flagQuiz/QuizContainer";

const Flags = () => {
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

export default  memo(Flags);
