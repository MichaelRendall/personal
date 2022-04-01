import { useState, useContext, useEffect } from "react";

import { FlagContext } from "../context/flag-context";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import FlagList from "../models/flag-interface";
import FLAG_LIST from "../lib/flag-list";

import GameSection from "../components/UI/GameSection";
import GameHeading from "../components/GameHeading/GameHeading";
import Container from "../components/UI/Container";
import FlagQuiz from "../components/flagQuiz/FlagQuiz";
import Button from "../components/FormElements/Button";

const Flags = () => {
  document.title = "Flags | Michael Rendall";
  const themeCtx = useContext(ThemeContext);
  const flagCtx = useContext(FlagContext);

  useEffect(() => {
    themeCtx.changeTheme(Theme.BLUE);
  }, [themeCtx]);

  const [gameRunning, setGameRunning] = useState(false);

  const startGameHandler = () => {
    const flagOrder = shuffleListHandler(FLAG_LIST);
    flagCtx.setFlags(flagOrder);
    flagCtx.setGameCompleted(false);
    flagCtx.setScore(0);
    flagCtx.setTime(0);
    flagCtx.setCompletedFlags([]);
    setGameRunning(true);
  };

  const endGameHandler = () => {
    setGameRunning(false);
  };

  const shuffleListHandler = (list: FlagList[]) => {
    let currentIndex = list.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [list[currentIndex], list[randomIndex]] = [
        list[randomIndex],
        list[currentIndex],
      ];
    }

    return list;
  };

  return (
    <GameSection>
      <GameHeading heading="FLAG QUIZ" showSettings />
      <Container>
        {!gameRunning && (
          <Button onClick={startGameHandler} name="Begin" large />
        )}
        {gameRunning && <FlagQuiz endGame={endGameHandler} />}
      </Container>
    </GameSection>
  );
};

export default Flags;
