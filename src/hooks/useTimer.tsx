import { useState, useEffect, useCallback } from "react";

const useTimer = () => {
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerVisual, setTimerVisual] = useState("0:00");
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const seconds = Math.floor((timerSeconds / 1000) % 60);
    const minutes = Math.floor((timerSeconds / 1000 / 60) % 60);
    setTimerVisual(minutes + ":" + (seconds > 9 ? seconds : "0" + seconds));
  }, [timerSeconds]);

  const setTimeDeadlineHandler = useCallback((timeLimit) => {
    let secondsRemaining;
    if (timeLimit === null) {
      return;
    } else {
      let timeDeadline = new Date();
      timeDeadline.setSeconds(timeDeadline.getSeconds() + +timeLimit);

      secondsRemaining =
        Date.parse(timeDeadline.toString()) - Date.parse(new Date().toString());
    }

    setTimerSeconds(secondsRemaining);
  }, []);

  useEffect(() => {
    if (!timerActive) {
      return;
    }
    const timerout = setTimeout(() => {
      if (timerSeconds <= 0) {
        setTimerActive(false);
        return;
      }
      setTimerSeconds((prevSeconds) => prevSeconds - 1000);
    }, 1000);
    return () => clearTimeout(timerout);
  }, [timerActive, timerSeconds]);

  return [
    timerVisual,
    timerActive,
    setTimerActive,
    setTimeDeadlineHandler,
  ] as const;
};

export default useTimer;
