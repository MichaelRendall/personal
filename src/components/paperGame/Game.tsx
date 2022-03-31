import React, { useEffect } from "react";
import classes from "./Game.module.scss";
import { useCookies } from "react-cookie";
import useFetch from "../../hooks/useFetch";
import Players from "./Players";
import Button from "../FormElements/Button";
import Wrapper from "../UI/Wrapper";
import SubmissionsForm from "./SubmissionsForm";

import { Socket } from "socket.io-client";

interface GameProps {
  leaveGame: (event: React.FormEvent) => Promise<void>;
  socket: Socket | undefined;
}

const Game: React.FC<GameProps> = (props) => {
  const { data, setData, sendRequest } = useFetch();
  const [cookies] = useCookies(["uuid", "name", "roomId"]);

  useEffect(() => {
    const fetchGame = async () => {
      sendRequest({
        url: `${process.env.API_URL || "http://localhost:8080/"}get-game/${
          cookies.roomId
        }`,
        method: "GET",
      });
    };
    fetchGame();
  }, [cookies.roomId, sendRequest]);

  useEffect(() => {
    props.socket!.on("join-game", (data) => {
      console.log("joined game!");
      setData(data);
    });
    props.socket!.on("leave-game", (data) => {
      console.log("a user left!");
      setData(data);
    });
  }, [setData, props.socket]);

  return (
    <div className={classes.game}>
      {data && (
        <>
          <Wrapper>
            <SubmissionsForm />
          </Wrapper>
          <aside className={classes.aside}>
            <h2>{data.game!.room}</h2>
            <hr />
            <Players players={data.game?.users} />
            <Button name="Leave" onClick={props.leaveGame} small />
          </aside>
        </>
      )}
    </div>
  );
};

export default Game;
