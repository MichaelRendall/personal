import React, { useState, useRef } from "react";

import FlagList from "../models/flag-interface";

interface FlagContextObj {
  flags: FlagList[];
  setFlags: (flags: FlagList[]) => void;
  completedFlags: FlagList[];
  setCompletedFlags: (flags: FlagList[]) => void;
  currentFlag: number;
  setCurrentFlag: (number: number) => void;
  gameCompleted: boolean;
  setGameCompleted: (boolean: boolean) => void;
  score: number;
  setScore: (number: number) => void;
  answerRef: React.RefObject<HTMLInputElement> | null;
  changeFlagHandler: (direction: string) => void;
  answerHandler: () => void;
}

export const FlagContext = React.createContext<FlagContextObj>({
  flags: [],
  setFlags: () => {},
  completedFlags: [],
  setCompletedFlags: () => {},
  currentFlag: 0,
  setCurrentFlag: () => {},
  gameCompleted: false,
  setGameCompleted: () => {},
  score: 0,
  setScore: () => {},
  answerRef: null,
  changeFlagHandler: () => {},
  answerHandler: () => {},
});

const FlagContextProvider: React.FC = (props) => {
  const [activeFlags, setActiveFlags] = useState<FlagList[]>([]);
  const [completedFlags, setCompletedFlags] = useState<FlagList[]>([]);
  const [currentFlag, setCurrentFlag] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const answerRef = useRef<HTMLInputElement>(null);

  const changeFlagHandler = (direction: string) => {
    answerRef.current!.value = "";

    const arrayLength = activeFlags.length;
    let newFlag = direction === "plus" ? currentFlag + 1 : currentFlag - 1;

    if (newFlag < 0) {
      newFlag = arrayLength - 1;
    }
    if (newFlag >= arrayLength) {
      newFlag = 0;
    }

    setCurrentFlag(newFlag);
  };

  const answerHandler = () => {
    if (
      answerRef!.current?.value.toLowerCase() ===
      activeFlags[currentFlag].name.toLowerCase()
    ) {
      const updatedCompletedFlags = completedFlags.concat(
        activeFlags[currentFlag]
      );
      setCompletedFlags(updatedCompletedFlags);

      const updatedActiveFlags = activeFlags.filter(
        (_, index) => index !== currentFlag
      );

      setActiveFlags(updatedActiveFlags);

      if (updatedActiveFlags.length === 0) {
        setGameCompleted(true);
      }

      setScore(updatedCompletedFlags.length);
      changeFlagHandler("plus");
    }
  };

  const contextValue: FlagContextObj = {
    flags: activeFlags,
    setFlags: setActiveFlags,
    completedFlags: completedFlags,
    setCompletedFlags: setCompletedFlags,
    currentFlag: currentFlag,
    setCurrentFlag: setCurrentFlag,
    gameCompleted: gameCompleted,
    setGameCompleted: setGameCompleted,
    score: score,
    setScore: setScore,
    answerRef: answerRef,
    changeFlagHandler: changeFlagHandler,
    answerHandler: answerHandler,
  };

  return (
    <FlagContext.Provider value={contextValue}>
      {props.children}
    </FlagContext.Provider>
  );
};

export default FlagContextProvider;
