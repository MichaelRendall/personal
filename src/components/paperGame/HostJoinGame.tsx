import React from "react";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import Form from "../FormElements/Form";
import classes from "./HostJoinGame.module.scss";
import useValidator from "../../hooks/useValidator";

interface HostJoinGameProps {
  hostGameHandler: (event: React.FormEvent) => Promise<void>;
  joinGameHandler: (event: React.FormEvent) => Promise<void>;
  userNameRef: React.RefObject<HTMLInputElement>;
  roomNameRef: React.RefObject<HTMLInputElement>;
}

const isNotEmpty = (value: string) => value.trim() !== "";

const HostJoinGame: React.FC<HostJoinGameProps> = (props) => {
  const {
    value: enteredDisplayName,
    isValid: enteredDisplayNameIsValid,
    hasError: displayNameInputHasError,
    valueChangeHandler: displayNameChangeHandler,
    inputBlurHandler: displayNameBlurHandler,
  } = useValidator(isNotEmpty);

  const {
    value: enteredRoomName,
    isValid: enteredRoomNameIsValid,
    hasError: roomNameInputHasError,
    valueChangeHandler: roomNameChangeHandler,
    inputBlurHandler: roomNameBlurHandler,
  } = useValidator(isNotEmpty);

  let formIsValid = false;
  if (enteredDisplayNameIsValid && enteredRoomNameIsValid) {
    formIsValid = true;
  }

  return (
    <>
      <Form onSubmit={props.hostGameHandler}>
        <Input
          type="text"
          id="name"
          label="Display Name"
          placeholder="Display Name"
          refValue={props.userNameRef}
          value={enteredDisplayName}
          onBlur={displayNameBlurHandler}
          onChange={displayNameChangeHandler}
          invalid={displayNameInputHasError}
        />
        <Input
          type="text"
          id="room"
          label="Room Code"
          placeholder="Room Code"
          refValue={props.roomNameRef}
          value={enteredRoomName}
          onBlur={roomNameBlurHandler}
          onChange={roomNameChangeHandler}
          invalid={roomNameInputHasError}
        />
        <div className={classes.form__buttons}>
          <Button
            name="Join Game"
            invert
            disabled={!formIsValid}
            onClick={props.joinGameHandler}
          />
          <Button name="Host Game" disabled={!formIsValid} submit />
        </div>
      </Form>
    </>
  );
};

export default HostJoinGame;
