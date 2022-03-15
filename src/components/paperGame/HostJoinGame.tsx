import React, { useState } from "react";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import Form from "../FormElements/Form";
import classes from "./HostJoinGame.module.scss";
import useValidator from "../../hooks/useValidator";
import Select from "../FormElements/Select";
import { timerOptions } from "../../lib/filter-options";

interface HostJoinGameProps {
  hostGameHandler: (event: React.FormEvent) => Promise<void>;
  joinGameHandler: (event: React.FormEvent) => Promise<void>;
  userNameRef: React.RefObject<HTMLInputElement>;
  roomNameRef: React.RefObject<HTMLInputElement>;
}

const isNotEmpty = (value: string) => value.trim() !== "";

const HostJoinGame: React.FC<HostJoinGameProps> = (props) => {
  const [hostRules, setHostRules] = useState<boolean>(false);
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

  const gameSetupHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setHostRules(true);
  };

  const cancelSetupHandler = () => {
    setHostRules(false);
  };

  return (
    <>
      {!hostRules && (
        <Form onSubmit={gameSetupHandler}>
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
      )}
      {hostRules && (
        <Form onSubmit={props.hostGameHandler}>
          <Input
            type="number"
            id="submissions"
            label="Submissions Per Player"
            placeholder="eg. 4"
            refValue={props.userNameRef}
            value={enteredDisplayName}
            onBlur={displayNameBlurHandler}
            onChange={displayNameChangeHandler}
            invalid={displayNameInputHasError}
          />
          <Select
            id="timer"
            label="Timer"
            options={timerOptions}
            param="n-time"
          />
          <div className={classes.form__buttons}>
            <Button name="Back" invert onClick={cancelSetupHandler} />
            <Button name="Host Game" submit disabled={!formIsValid} />
          </div>
        </Form>
      )}
    </>
  );
};

export default HostJoinGame;
