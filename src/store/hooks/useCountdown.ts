import { useEffect, useState } from "react";
import TimeUnits from "../../types/types";
import { timeUnitsBetween } from "../../utils/dates";

interface TimeInterval {
  current?: NodeJS.Timer;
}

const useCountdown = (endDate: Date) => {
  const [counter, setCounter] = useState<TimeUnits>();

  useEffect(() => {
    const timeInterval: TimeInterval = {};

    const startTimer = () => {
      const currentDate = new Date();

      const { total, days, hours, minutes, seconds } = timeUnitsBetween(
        currentDate,
        endDate
      );

      setCounter({
        days,
        hours,
        minutes,
        seconds,
      });

      if (total <= 0) {
        clearInterval(timeInterval.current);
      }
    };

    timeInterval.current = setInterval(startTimer, 1000);

    return () => clearInterval(timeInterval.current);
  }, [endDate]);

  return {
    counter,
  };
};

export default useCountdown;
