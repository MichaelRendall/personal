import React from "react";
import classes from "./Form.module.scss";

interface FormProps {
  onSubmit?: (event: React.FormEvent) => Promise<void>;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
