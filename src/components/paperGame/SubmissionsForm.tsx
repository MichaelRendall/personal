import React from "react";
import Button from "../FormElements/Button";
import Form from "../FormElements/Form";
import classes from "./SubmissionsForm.module.scss";

const SubmissionsForm = () => {
  return (
    <>
      <h3>Add Names</h3>
      <Form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Button name="submit" small />
      </Form>
    </>
  );
};

export default SubmissionsForm;
