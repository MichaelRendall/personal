import { useState, useContext, useEffect } from "react";
import Button from "../components/FormElements/Button";
import GameHeading from "../components/GameHeading/GameHeading";
import GameSection from "../components/UI/GameSection";
import { ThemeContext } from "../context/theme-context";
import Theme from "../models/theme-enum";
import FLAG_LIST from "../lib/flag-list";

interface FlagList {
  [key: string]: string;
  name: string;
  continent: string;
  src: string;
}

const Flags = () => {
  document.title = "Flags | Michael Rendall";
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    themeCtx.changeTheme(Theme.BLUE);
  }, [themeCtx]);

  const [currentFlag, setCurrentFlag] = useState<FlagList>();
  //const [activeFlags, setActiveFlags] = useState<FlagList[]>(FLAG_LIST);

  const startGameHandler = () => {
    //const flag = activeFlags[Math.floor(Math.random() * activeFlags.length)];
    const flag = FLAG_LIST[Math.floor(Math.random() * FLAG_LIST.length)];
    setCurrentFlag(flag);
  };

  return (
    <GameSection>
      <GameHeading heading="FLAG QUIZ" showSettings />
      <Button onClick={startGameHandler} name="Begin" large />
      <p>{currentFlag?.name}</p>
      <img
        src={`../assets/flags/${currentFlag?.src}`}
        alt={`flag of ${currentFlag?.name}`}
      />
    </GameSection>
  );
};

export default Flags;
