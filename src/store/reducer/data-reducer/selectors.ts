import {NameSpace} from '../../../const.ts';
import {Film} from 'types/film.ts';
import {State} from 'types/state.ts';

export const getFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].films;
export const getFilteredFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].filteredFilms;
export const getSimilarFilms = (state: Pick<State, NameSpace.Data>): Film[] => state[NameSpace.Data].similarFilms;
export const getPromoFilm = (state: Pick<State, NameSpace.Data>): Film | null => state[NameSpace.Data].promoFilm;
export const getCurrentGenre = (state: Pick<State, NameSpace.Data>): string => state[NameSpace.Data].currentGenre;
export const getCardCount = (state: Pick<State, NameSpace.Data>): number => state[NameSpace.Data].cardCount;
export const resetMainPage = () => ({
  type: `${NameSpace.Data}/resetMainPage`,
});
export const changeGenre = (genre: string) => ({
  type: `${NameSpace.Data}/changeGenre`,
  payload: genre,
});
export const increaseCardCount = () => ({
  type: `${NameSpace.Data}/increaseCardCount`,
});
