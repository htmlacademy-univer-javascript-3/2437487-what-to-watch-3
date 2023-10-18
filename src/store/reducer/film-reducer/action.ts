import {State} from 'types/state.ts';
import {Film} from 'types/film.ts';
import {Namespace} from '../../../const.ts';
import {Review} from 'types/review.ts';

export const getFilm = (state: State): Film | null => state[Namespace.Film].film;
export const getReviews = (state: State): Review[] => state[Namespace.Film].reviews;
