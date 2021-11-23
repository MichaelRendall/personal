import { useState, useEffect, useCallback } from "react";

const useTimer = (useTimer) => {
  const [timerSeconds, setTimerSeconds] = useState();
  const [timerVisual, setTimerVisual] = useState("0:00");
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const seconds = Math.floor((timerSeconds / 1000) % 60);
    const minutes = Math.floor((timerSeconds / 1000 / 60) % 60);
    setTimerVisual(minutes + ":" + (seconds > 9 ? seconds : "0" + seconds));
  }, [timerSeconds, useTimer]);

  const setTimeDeadlineHandler = useCallback((timeLimit) => {
    let secondsRemaining;
    if (timeLimit === null) {
      return;
    } else {
      let timeDeadline = new Date();
      timeDeadline.setSeconds(timeDeadline.getSeconds() + +timeLimit);

      secondsRemaining = Date.parse(timeDeadline) - Date.parse(new Date());
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

  return [timerVisual, timerActive, setTimerActive, setTimeDeadlineHandler];
};

export default useTimer;
