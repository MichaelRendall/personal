import React from "react";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import classes from "./HostJoinGame.module.scss";

interface HostJoinGameProps {
  submitted: (event: React.FormEvent) => Promise<void>;
  userNameRef: React.RefObject<HTMLInputElement>;
  roomNameRef: React.RefObject<HTMLInputElement>;
}

const HostJoinGame: React.FC<HostJoinGameProps> = (props) => {
  return (
    <form className={classes.form} onSubmit={props.submitted}>
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
      <Button name="Host or Join Game" />
    </form>
  );
};

export default HostJoinGame;
