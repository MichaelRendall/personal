import React from "react";
import Card from "../components/UI/Card";
import classes from "./Home.module.scss";

const Home = () => {
  document.title = "Home | Michael Rendall";
  return (
    <section className={classes.cardSection}>
      <Card header="Charades" url="/charades" />
      <Card header="Paper Game" url="/paper-game" unfinished />
      <Card header="Flag Quiz" url="/flags" unfinished />
    </section>
  );
};

export default Home;
