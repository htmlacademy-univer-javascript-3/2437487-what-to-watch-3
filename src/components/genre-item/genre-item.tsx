import {useAppDispatch, useAppSelector} from '../../hooks';
import {getCurrentGenre} from 'store/reducer/data-reducer/selectors.ts';
import {MouseEvent} from 'react';
import {changeGenre} from 'store/reducer/data-reducer/data-reducer.ts';

type GenreItemProps = {
  genre: string;
}

export function GenreItem({genre}: GenreItemProps) {
  const currentGenre = useAppSelector(getCurrentGenre);
  const dispatch = useAppDispatch();
  const handleAClick = (evt: MouseEvent<HTMLAnchorElement>, newGenre: string) => {
    evt.preventDefault();
    dispatch(changeGenre(newGenre));
  };

  return (
    <li key={genre}
      className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
    >
      <a
        className="catalog__genres-link"
        onClick={(evt) => handleAClick(evt, genre)}
      >
        {genre}
      </a>
    </li>
  );
}
