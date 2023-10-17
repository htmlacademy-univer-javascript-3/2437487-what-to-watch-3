import {Namespace} from '../../../const.ts';
import {Film} from 'types/film.ts';
import {State} from 'types/state.ts';

export const getFilms = (state: State): Film[] => state[Namespace.Main].films;
export const getFilteredFilms = (state: State): Film[] => state[Namespace.Main].filteredFilms;
export const getPromoFilm = (state: State): Film | null => state[Namespace.Main].promoFilm;
