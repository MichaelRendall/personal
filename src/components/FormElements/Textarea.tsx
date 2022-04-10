import React from "react";
import classes from "./Textarea.module.scss";

import { AiOutlineCloseCircle } from "react-icons/ai";

interface TextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  refValue?: React.RefObject<HTMLTextAreaElement>;
  value?: string;
  invalid?: boolean;
  onBlur?: () => void;
  onChange?: ((event: React.FormEvent) => void) | (() => void);
}

const Textarea: React.FC<TextareaProps> = (props) => {
  const textareaClasses = [classes.textarea];

  if (props.invalid) {
    textareaClasses.push(classes.invalid);
  }

  return (
    <div className="input__wrapper">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <span className="input__container">
        <textarea
          className={textareaClasses.join(" ")}
          id={props.id}
          placeholder={props.placeholder}
          ref={props.refValue}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
        ></textarea>
        {props.invalid && (
          <AiOutlineCloseCircle className={classes.invalid__icon} />
        )}
      </span>
    </div>
  );
};

export default Textarea;
