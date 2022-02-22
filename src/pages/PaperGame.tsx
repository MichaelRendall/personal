import React, { useRef } from "react";
import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Button from "../components/FormElements/Button";
import Wrapper from "../components/UI/Wrapper";
import Input from "../components/FormElements/Input";
import { useCookies } from "react-cookie";

const PaperGame = () => {
  const roomNameRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const [cookies, setCookie] = useCookies(["uuid"]);
  document.title = "Paper Game | Michael Rendall";

  const createGameHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    //console.log(roomNameRef.current!.value);
    //console.log(userNameRef.current!.value);

    const response = await fetch("http://localhost:8080/create-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        room: roomNameRef.current!.value,
        name: userNameRef.current!.value,
      }),
    });
    const responseData = await response.json();

    console.log(responseData);
    setCookie("uuid", responseData.uuid);
  };

  return (
    <GameSection theme="yellow">
      <GameHeading heading="PAPER GAME" />
      <Wrapper size="auto">
        <form onSubmit={createGameHandler}>
          <Input
            type="text"
            id="name"
            label="Display Name"
            placeholder="Display Name"
            refValue={userNameRef}
          />
          <Input
            type="text"
            id="room"
            label="Room Code"
            placeholder="Room Code"
            refValue={roomNameRef}
          />
          <Button name="Host or Join Game" />
        </form>
      </Wrapper>
    </GameSection>
  );
};

export default PaperGame;
