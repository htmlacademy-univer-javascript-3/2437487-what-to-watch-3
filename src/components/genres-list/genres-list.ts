import {Film} from 'types/film.ts';
import {DEFAULT_GENRE} from '../../const.ts';

export const getGenres = (films: Film[]) => (
  [DEFAULT_GENRE].concat(...new Set(films.map((film) => film.genre)))
);
