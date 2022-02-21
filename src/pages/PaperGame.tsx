import React from "react";
import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Button from "../components/FormElements/Button";
import Wrapper from "../components/UI/Wrapper";
import Input from "../components/FormElements/Input";

const PaperGame = () => {
  document.title = "Paper Game | Michael Rendall";

  const createGameHandler = () => {};

  return (
    <GameSection theme="yellow">
      <GameHeading heading="PAPER GAME" />
      <Wrapper size="auto">
        <Input
          type="text"
          id="name"
          label="Display Name"
          placeholder="Display Name"
        />
        <Input
          type="text"
          id="room"
          label="Room Code"
          placeholder="Room Code"
        />
        <Button name="Host or Join Game" onClick={createGameHandler} />
      </Wrapper>
    </GameSection>
  );
};

export default PaperGame;
