import {Namespace} from '../../../const.ts';
import {Film} from 'types/film.ts';
import {State} from 'types/state.ts';

export const getFilms = (state: State): Film[] => state[Namespace.Main].films;
export const getFilm = (state: State): Film | null => state[Namespace.Main].film;
export const getFilteredFilms = (state: State): Film[] => state[Namespace.Main].filteredFilms;
export const getSimilarFilms = (state: State): Film[] => state[Namespace.Main].similarFilms;
export const getPromoFilm = (state: State): Film | null => state[Namespace.Main].promoFilm;
export const getCurrentGenre = (state: State): string => state[Namespace.Main].currentGenre;
export const getCardCount = (state: State): number => state[Namespace.Main].cardCount;
export const resetMainPage = () => ({
  type: `${Namespace.Main}/resetMainPage`,
});
export const changeGenre = (genre: string) => ({
  type: `${Namespace.Main}/changeGenre`,
  payload: genre,
});
export const changeFilm = (film: Film) => ({
  type: `${Namespace.Main}/changeFilm`,
  payload: film,
});
export const changeFilmById = (id: number) => ({
  type: `${Namespace.Main}/changeFilmById`,
  payload: id,
});
export const increaseCardCount = () => ({
  type: `${Namespace.Main}/increaseCardCount`,
});
