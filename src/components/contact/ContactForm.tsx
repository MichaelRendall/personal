import React, { useState, useRef, useEffect } from "react";

import useValidator from "../../hooks/useValidator";
import useFetch from "../../hooks/useFetch";

import { Wrapper, Spinner } from "../UI";
import { Button, Form, Input, Textarea } from "../FormElements";

const isNotEmpty = (value: string) => value.trim() !== "";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { data, isLoading, error, sendRequest } = useFetch();

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
  } = useValidator(isNotEmpty);

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

  useEffect(() => {
    if (data && !error) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }, [data, error]);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    await sendRequest({
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/contact/send-message`,
      method: "POST",
      body: {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        message: messageRef.current!.value,
      },
    });
  };

  return (
    <Wrapper size="auto">
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
      {submitted && <p>Thanks for the message!</p>}
      {isLoading && <Spinner />}
      {error && <small className="error">{error}</small>}
    </Wrapper>
  );
};

export default ContactForm;
