import React, { useRef, useEffect } from "react";
import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Wrapper from "../components/UI/Wrapper";

import { useCookies } from "react-cookie";
import HostJoinGame from "../components/paperGame/HostJoinGame";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/UI/Spinner";
import Game from "../components/paperGame/Game";

const PaperGame = () => {
  document.title = "Paper Game | Michael Rendall";

  const roomNameRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);

  const { isLoading, error, data, sendRequest } = useFetch();
  const [cookies, setCookie, removeCookie] = useCookies([
    "uuid",
    "name",
    "roomId",
  ]);

  useEffect(() => {
    if (data?.removeData && !error) {
      removeCookie("uuid");
      removeCookie("name");
      removeCookie("roomId");
    } else if (data && !error) {
      setCookie("uuid", data.uuid);
      setCookie("name", data.name);
      setCookie("roomId", data.roomId);
    }
  }, [data, error, setCookie, removeCookie]);

  const hostGameHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendRequest({
      url: `http://localhost:8080/create-game`,
      method: "POST",
      body: {
        room: roomNameRef.current!.value,
        name: userNameRef.current!.value,
      },
    });
  };

  const joinGameHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendRequest({
      url: `http://localhost:8080/join-game`,
      method: "POST",
      body: {
        room: roomNameRef.current!.value,
        name: userNameRef.current!.value,
      },
    });
  };

  const leaveGameHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    sendRequest({
      url: `http://localhost:8080/leave-game`,
      method: "POST",
      body: {
        roomId: cookies.roomId,
        uuid: cookies.uuid,
      },
    });
  };

  return (
    <GameSection theme="yellow">
      <GameHeading heading="PAPER GAME" />
      {!cookies.roomId && (
        <Wrapper size="auto">
          <HostJoinGame
            hostGameHandler={hostGameHandler}
            joinGameHandler={joinGameHandler}
            userNameRef={userNameRef}
            roomNameRef={roomNameRef}
          />
          {isLoading && <Spinner />}
          {error && <small className="error">{error}</small>}
        </Wrapper>
      )}
      {!isLoading && cookies.roomId && (
        <>
          <Game leaveGame={leaveGameHandler} />
        </>
      )}
    </GameSection>
  );
};

export default PaperGame;
