import {useAppSelector} from '../../hooks';
import {getFilms} from 'store/reducer/data-reducer/selectors.ts';
import {getGenres} from '@components/genres-list/genres-list.ts';
import {useMemo} from 'react';
import {GenreItem} from '@components/genre-item/genre-item.tsx';
import {MAX_GENRES_COUNT} from '../../const.ts';

export function GenresList() {

  const films = useAppSelector(getFilms);
  const genres = useMemo(() => getGenres(films), [films]);

  return (
    <ul className="catalog__genres-list">
      {
        genres.slice(0, MAX_GENRES_COUNT).map((genre) => <GenreItem key={genre} genre={genre}/>)
      }
    </ul>
  );
}
