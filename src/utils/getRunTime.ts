import {MINUTES_IN_HOUR} from '../const.ts';

export const getRunTime = (time: number): string => {
  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;
  return `${hours}h ${minutes}m`;
};
