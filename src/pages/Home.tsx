import { memo } from "react";
import classes from "./Home.module.scss";

import { Card } from "../components/UI";

const Home = () => {
  return (
    <section className={classes.cardSection}>
      <Card header="Charades" url="/charades" />
      <Card header="Paper Game" url="/paper-game" unfinished />
      <Card header="Flag Quiz" url="/flags" />
    </section>
  );
};

export default memo(Home);
