import React, { useContext } from "react";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import Card from "../components/UI/Card";
import classes from "./Home.module.scss";

const Home = () => {
  document.title = "Home | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  themeCtx.changeTheme(Theme.DEFAULT);
  return (
    <section className={classes.cardSection}>
      <Card header="Charades" url="/charades" />
      <Card header="Paper Game" url="/paper-game" unfinished />
      <Card header="Flag Quiz" url="/flags" unfinished />
    </section>
  );
};

export default Home;
