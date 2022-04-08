import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../components/FormElements/Button";
import Form from "../components/FormElements/Form";
import Input from "../components/FormElements/Input";
import Textarea from "../components/FormElements/Textarea";
import GameHeading from "../components/GameHeading/GameHeading";
import Container from "../components/UI/Container";
import GameSection from "../components/UI/GameSection";
import Wrapper from "../components/UI/Wrapper";

import useValidator from "../hooks/useValidator";

import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import Spinner from "../components/UI/Spinner";
import useFetch from "../hooks/useFetch";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.trim() !== "" && value.includes("@");

const Contact = () => {
  document.title = "Contact | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    themeCtx.changeTheme(Theme.RED);
  }, [themeCtx]);

  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { isLoading, error, sendRequest } = useFetch();

  const {
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useValidator(isNotEmpty);

  const {
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useValidator(isEmail);

  const {
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
  } = useValidator(isNotEmpty);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid, enteredMessageIsValid]);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    await sendRequest({
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/contact/submit`,
      method: "POST",
      body: {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        message: messageRef.current!.value,
      },
    });

    if (!error) {
      setSubmitted(true);
    }
  };

  return (
    <GameSection>
      <GameHeading heading="GET IN TOUCH" />
      <Container>
        <Wrapper size="auto">
          {isLoading && <Spinner />}
          {!submitted && (
            <Form onSubmit={submitHandler}>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                refValue={nameRef}
                invalid={nameInputHasError}
                onBlur={nameBlurHandler}
                onChange={nameChangeHandler}
              />
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                refValue={emailRef}
                invalid={emailInputHasError}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
              />
              <Textarea
                id="message"
                placeholder="Your message..."
                refValue={messageRef}
                invalid={messageInputHasError}
                onBlur={messageBlurHandler}
                onChange={messageChangeHandler}
              />
              <Button name="Submit" submit fullWidth disabled={!formValid} />
            </Form>
          )}
          {submitted && <p>Thanks, I'll be in touch!</p>}
        </Wrapper>
      </Container>
    </GameSection>
  );
};

export default Contact;
