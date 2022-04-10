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
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { isLoading, error, sendRequest } = useFetch();

  const {
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useValidator(isNotEmpty);

  const {
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
  } = useValidator(isNotEmpty);

  useEffect(() => {
    if (enteredNameIsValid && enteredMessageIsValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [enteredNameIsValid, enteredMessageIsValid]);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    await sendRequest({
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/contact/submit`,
      method: "POST",
      body: {
        name: nameRef.current!.value,
        message: messageRef.current!.value,
      },
    });

    if (!error) {
      setSubmitted(true);
    }
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
    </Wrapper>
  );
};

export default ContactForm;
