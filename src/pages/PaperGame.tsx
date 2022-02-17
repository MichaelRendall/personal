import React from "react";
import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Button from "../components/FormElements/Button";
import Wrapper from "../components/UI/Wrapper";

const PaperGame = () => {
  document.title = "Paper Game | Michael Rendall";

  const hostGameHandler = () => {};
  const joinGameHandler = () => {};

  return (
    <GameSection theme="yellow">
      <GameHeading heading="PAPER GAME" />
      <Wrapper>
        <Button name="Host Game" onClick={hostGameHandler} />
        <Button name="Join Game" onClick={joinGameHandler} />
      </Wrapper>
    </GameSection>
  );
};

export default PaperGame;
