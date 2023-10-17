import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre, getCurrentGenre, getFilms} from 'store/reducer/main-reducer/action.ts';
import {getGenres} from '@components/genre-list/genre-list.ts';
import {MouseEvent} from 'react';

export function GenreList() {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
  const genres = getGenres(films);

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre(genre));
  };
  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
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
        ))
      }
    </ul>
  );
}
