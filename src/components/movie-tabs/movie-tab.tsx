import {Dispatch, MouseEvent, SetStateAction} from 'react';
import {MovieTabEnum} from 'types/movie-tab.enum.ts';

type MovieTabProps = {
  name: MovieTabEnum;
  onClick: Dispatch<SetStateAction<MovieTabEnum>>;
  isActive: boolean;
}
export function MovieTab({name, onClick, isActive}: MovieTabProps) {
  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onClick(name);
  };
  return (
    <li className={`film-nav__item ${isActive ? ' film-nav__item--active' : ''}`}>
      <div onClick={handleClick} className="film-nav__link">{name}</div>
    </li>
  );
}
