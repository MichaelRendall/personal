import React from "react";
import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";

const PaperGame = () => {
  document.title = "Paper Game | Michael Rendall";

  return (
    <GameSection theme="yellow">
      <GameHeading heading="PAPER GAME" />
    </GameSection>
  );
};

export default PaperGame;
