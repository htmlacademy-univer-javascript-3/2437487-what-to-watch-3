import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, getCurrentGenre} from 'store/reducer/data-reducer/selectors.ts';
import {MouseEvent} from 'react';

type GenreItemProps = {
  genre: string;
}
export function GenreItem({genre}: GenreItemProps) {
  const currentGenre = useAppSelector(getCurrentGenre);
  const dispatch = useAppDispatch();
  const handleClick = (evt: MouseEvent<HTMLAnchorElement>, newGenre: string) => {
    evt.preventDefault();
    dispatch(changeGenre(newGenre));
  };

  return (
    <li key={genre}
      className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
    >
      <a href="/"
        className="catalog__genres-link"
        onClick={(evt) => handleClick(evt, genre)}
      >
        {genre}
      </a>
    </li>
  );
}
