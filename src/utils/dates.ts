import TimeUnits from "../types/types";

interface TimeUnitsBetween extends TimeUnits {
  total: number;
}

export const endOfTheWorld = new Date("04/12/2035");

export const timeUnitsBetween = (
  startDate: Date,
  endDate: Date
): TimeUnitsBetween => {
  const total = endDate.getTime() - startDate.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};
