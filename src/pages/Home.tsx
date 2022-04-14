import React, { useContext, useEffect } from "react";
import classes from "./Home.module.scss";

import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";

import { Card } from "../components/UI";

const Home = () => {
  document.title = "Home | Michael Rendall";
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    themeCtx.changeTheme(Theme.RED);
  }, [themeCtx]);

  return (
    <section className={classes.cardSection}>
      <Card header="Charades" url="/charades" />
      <Card header="Paper Game" url="/paper-game" unfinished />
      <Card header="Flag Quiz" url="/flags" />
    </section>
  );
};

export default Home;
