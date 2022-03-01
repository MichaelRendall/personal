import classes from "./Players.module.scss";

interface PlayersProps {
  players: { isHost: boolean; name: string; uuid: string }[] | undefined;
}

const Players: React.FC<PlayersProps> = (props) => {
  return (
    <>
      <h3>Players</h3>
      <ul className={classes.playerList}>
        {props.players &&
          props.players.map((player) => {
            return (
              <li key={player.uuid}>
                {player.name} <span className={classes.score}>0</span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Players;
