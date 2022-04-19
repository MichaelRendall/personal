import { useRef, useEffect, useState, memo } from "react";

import useFetch from "../hooks/useFetch";

import { useCookies } from "react-cookie";
import { io, Socket } from "socket.io-client";

import { Container, GameSection, Wrapper, Spinner } from "../components/UI";
import GameHeading from "../components/GameHeading/GameHeading";
import HostJoinGame from "../components/paperGame/HostJoinGame";
import Game from "../components/paperGame/Game";

const PaperGame = () => {
  const roomNameRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);

  const { isLoading, error, data, sendRequest } = useFetch();
  const [cookies, setCookie, removeCookie] = useCookies([
    "uuid",
    "name",
    "roomId",
  ]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const newSocket = io(
      `${process.env.REACT_APP_API_URL || "http://localhost:8080"}`,
      {
        autoConnect: false,
      }
    );
    const sessionId = localStorage.getItem("sessionId");

    if (sessionId) {
      newSocket.auth = { sessionId, roomId: cookies.roomId };
    }
    newSocket.connect();

    newSocket.on("session", ({ sessionId, roomId }) => {
      // attach the session ID to the next reconnection attempts
      newSocket.auth = { sessionId, roomId };
      // store it in the localStorage
      localStorage.setItem("sessionId", sessionId);
    });

    setSocket(newSocket);
  }, [setSocket, cookies.roomId]);

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
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/create-game`,
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
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/join-game`,
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
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/leave-game`,
      method: "POST",
      body: {
        roomId: cookies.roomId,
        uuid: cookies.uuid,
      },
    });
  };

  return (
    <GameSection>
      <GameHeading heading="PAPER GAME" />
      <Container>
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
        {!isLoading && cookies.roomId && socket && (
          <>
            <Game leaveGame={leaveGameHandler} socket={socket} />
          </>
        )}
      </Container>
    </GameSection>
  );
};

export default memo(PaperGame);
