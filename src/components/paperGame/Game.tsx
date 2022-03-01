import React, { useEffect } from "react";
import classes from "./Game.module.scss";
import { useCookies } from "react-cookie";
import useFetch from "../../hooks/useFetch";
import Players from "./Players";
import Button from "../FormElements/Button";
import SubmissionsForm from "./SubmissionsForm";

interface GameProps {
  leaveGame: (event: React.FormEvent) => Promise<void>;
}

const Game: React.FC<GameProps> = (props) => {
  const { data, sendRequest } = useFetch();
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
  console.log(data);
  return (
    <div>
      {data && (
        <>
          <h2>{data.game!.room}</h2>
          <div className={classes.game}>
            <section>
              <SubmissionsForm />
            </section>
            <aside>
              <Players players={data.game?.users} />
              <Button name="Leave" onClick={props.leaveGame} small />
            </aside>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
