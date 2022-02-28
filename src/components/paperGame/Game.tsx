import React, { useEffect } from "react";
import classes from "./Game.module.scss";
import { useCookies } from "react-cookie";
import useFetch from "../../hooks/useFetch";

interface GameProps {
  leaveGame: (event: React.FormEvent) => Promise<void>;
}

const Game: React.FC<GameProps> = (props) => {
  const { isLoading, error, data, sendRequest } = useFetch();
  const [cookies] = useCookies(["uuid", "name", "roomId"]);

  useEffect(() => {
    const fetchGame = async () => {
      sendRequest({
        url: `http://localhost:8080/get-game/${cookies.roomId}`,
        method: "GET",
      });
    };
    fetchGame();
  }, [cookies.roomId, sendRequest]);

  return (
    <div>
      {data && (
        <>
          <p>{data.game!.room}</p>
          <button onClick={props.leaveGame}>Leave</button>
        </>
      )}
    </div>
  );
};

export default Game;
