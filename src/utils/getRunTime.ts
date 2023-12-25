import {MINUTES_IN_HOUR} from '../const.ts';

export const getRunTime = (time: number): string => {
  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};
