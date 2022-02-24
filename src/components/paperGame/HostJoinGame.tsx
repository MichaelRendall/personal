import React from "react";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import classes from "./HostJoinGame.module.scss";

interface HostJoinGameProps {
  hostGameHandler: (event: React.FormEvent) => Promise<void>;
  joinGameHandler: (event: React.FormEvent) => Promise<void>;
  userNameRef: React.RefObject<HTMLInputElement>;
  roomNameRef: React.RefObject<HTMLInputElement>;
}

const HostJoinGame: React.FC<HostJoinGameProps> = (props) => {
  return (
    <form className={classes.form} onSubmit={props.hostGameHandler}>
      <Input
        type="text"
        id="name"
        label="Display Name"
        placeholder="Display Name"
        refValue={props.userNameRef}
      />
      <Input
        type="text"
        id="room"
        label="Room Code"
        placeholder="Room Code"
        refValue={props.roomNameRef}
      />
      <div className={classes.form__buttons}>
        <Button name="Join Game" invert onClick={props.joinGameHandler} />
        <Button name="Host Game" submit />
      </div>
    </form>
  );
};

export default HostJoinGame;
