import { useEffect, useState } from "react";

const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (timerOn) {
      interval = setInterval(() => {
        console.log("ticking");
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return [time, setTimerOn] as const;
};

export default useStopwatch;
