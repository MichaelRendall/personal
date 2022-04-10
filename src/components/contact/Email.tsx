import React from "react";
import { Wrapper } from "../UI";
import { HiOutlineMail } from "react-icons/hi";
import classes from "./Email.module.scss";

const Email = () => {
  return (
    <Wrapper size="auto" type="small">
      <span className={classes.email}>
        <HiOutlineMail />
        <small>michaelrendallmail@gmail.com</small>
      </span>
    </Wrapper>
  );
};

export default Email;
