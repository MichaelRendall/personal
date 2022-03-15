import { useState, useContext, useEffect } from "react";
import Button from "../components/FormElements/Button";
import GameHeading from "../components/GameHeading/GameHeading";
import GameSection from "../components/UI/GameSection";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import FLAG_LIST from "../lib/flag-list";
import Wrapper from "../components/UI/Wrapper";
import FlagList from "../models/flag-interface";
import FlagCard from "../components/flagQuiz/FlagCard";

const Flags = () => {
  document.title = "Flags | Michael Rendall";
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    themeCtx.changeTheme(Theme.BLUE);
  }, [themeCtx]);

  const [gameRunning, setGameRunning] = useState(false);
  const [activeFlags, setActiveFlags] = useState<FlagList[]>(FLAG_LIST);

  const startGameHandler = () => {
    const flagOrder = shuffleListHandler(FLAG_LIST);
    setActiveFlags(flagOrder);
    setGameRunning(true);
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
      {!gameRunning && <Button onClick={startGameHandler} name="Begin" large />}
      {gameRunning && (
        <Wrapper>
          <FlagCard flags={activeFlags} />
        </Wrapper>
      )}
    </GameSection>
  );
};

export default Flags;
