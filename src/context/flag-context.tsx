import React, { useState } from "react";
import FLAG_LIST from "../lib/flag-list";
import FlagList from "../models/flag-interface";

interface FlagContextObj {
  flags: FlagList[];
  setFlags: (flags: FlagList[]) => void;
  currentFlag: number;
  setCurrentFlag: (number: number) => void;
  gameCompleted: boolean;
  setGameCompleted: (boolean: boolean) => void;
  score: number;
  setScore: (number: number) => void;
}

export const FlagContext = React.createContext<FlagContextObj>({
  flags: [],
  setFlags: () => {},
  currentFlag: 0,
  setCurrentFlag: () => {},
  gameCompleted: false,
  setGameCompleted: () => {},
  score: 0,
  setScore: () => {},
});

const FlagContextProvider: React.FC = (props) => {
  const [activeFlags, setActiveFlags] = useState<FlagList[]>(FLAG_LIST);
  const [currentFlag, setCurrentFlag] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const contextValue: FlagContextObj = {
    flags: activeFlags,
    setFlags: setActiveFlags,
    currentFlag: currentFlag,
    setCurrentFlag: setCurrentFlag,
    gameCompleted: gameCompleted,
    setGameCompleted: setGameCompleted,
    score: score,
    setScore: setScore,
  };

  return (
    <FlagContext.Provider value={contextValue}>
      {props.children}
    </FlagContext.Provider>
  );
};

export default FlagContextProvider;
