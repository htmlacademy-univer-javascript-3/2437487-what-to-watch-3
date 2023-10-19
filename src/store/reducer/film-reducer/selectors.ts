import {State} from 'types/state.ts';
import {Film} from 'types/film.ts';
import {NameSpace} from '../../../const.ts';
import {Review} from 'types/review.ts';

export const getFilm = (state: Pick<State, NameSpace.Film>): Film | null => state[NameSpace.Film].film;
export const getReviews = (state: Pick<State, NameSpace.Film>): Review[] => state[NameSpace.Film].reviews;
