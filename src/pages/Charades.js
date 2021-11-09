import React from "react";
import Button from "../components/FormElements/Button";
//import classes from "./Charades.module.scss";

const Charades = () => {
  return (
    <section className="flexCenter">
      <h1>Charades</h1>
      <Button name="Settings" filter={true} />
    </section>
  );
};

export default Charades;
