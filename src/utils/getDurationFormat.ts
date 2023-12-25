import {MINUTES_IN_HOUR, SECONDS_IN_MINUTE} from '../const.ts';

export const getDurationFormat = (seconds: number): string => {
  const hours = Math.floor(seconds / (MINUTES_IN_HOUR * SECONDS_IN_MINUTE));
  const minutes = Math.floor((seconds % (MINUTES_IN_HOUR * SECONDS_IN_MINUTE)) / SECONDS_IN_MINUTE);
  const remainingSeconds = Math.floor(seconds % SECONDS_IN_MINUTE);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  if (seconds / MINUTES_IN_HOUR / SECONDS_IN_MINUTE >= 1) {
    return `-${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  return `-${formattedMinutes}:${formattedSeconds}`;
};
