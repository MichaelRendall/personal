import classes from "./Players.module.scss";

const Players = () => {
  return (
    <>
      <h3>Players</h3>
      <ul className={classes.playerList}>
        <li>
          Michael <span>4</span>
        </li>
        <li>Player2 <span>2</span></li>
      </ul>
    </>
  );
};

export default Players;
