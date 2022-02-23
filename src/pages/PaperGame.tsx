import React, { useRef } from "react";
import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Wrapper from "../components/UI/Wrapper";

import { useCookies } from "react-cookie";
import HostJoinGame from "../components/paperGame/HostJoinGame";

const PaperGame = () => {
  const roomNameRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const [cookies, setCookie] = useCookies(["uuid", "name"]);
  document.title = "Paper Game | Michael Rendall";

  const createGameHandler = async (event: React.FormEvent) => {
    event.preventDefault();

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
    setCookie("name", responseData.name);

    console.log(cookies.name);
    console.log(cookies.uuid);
  };

  return (
    <GameSection theme="yellow">
      <GameHeading heading="PAPER GAME" />
      <Wrapper size="auto">
        <HostJoinGame
          submitted={createGameHandler}
          userNameRef={userNameRef}
          roomNameRef={roomNameRef}
        />
      </Wrapper>
    </GameSection>
  );
};

export default PaperGame;
