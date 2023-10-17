import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, Namespace} from '../../../const.ts';
import {MainState} from 'types/state.ts';
import {Film} from 'types/film.ts';
import {filmsMock} from '@mocks/films.ts';

const initialState: MainState = {
  films: filmsMock,
  promoFilm: filmsMock[0],
  currentGenre: DEFAULT_GENRE,
  similarFilms: filmsMock.slice(0, 4),
  favoriteFilms: filmsMock,
  filteredFilms: filmsMock,
  film: filmsMock[0],
};

const filterFilms = (films: Film[], genre: string): Film[] => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const mainReducer = createSlice({
  name: Namespace.Main,
  initialState: initialState,
  reducers: {
    changeGenre: (state, action: {payload: string}) => {
      const filteredFilms = filterFilms(state.films, action.payload);
      state.currentGenre = action.payload;
      state.filteredFilms = filteredFilms;
    },
    changeFilm: (state, action: {payload: Film}) => {
      state.film = action.payload;
      state.similarFilms = filterFilms(state.films, action.payload.genre).filter((i) => i.id !== action.payload.id).slice(0, 4);
    },
    changeFilmById: (state, action: {payload: number}) => {
      const film = state.films.find((i) => i.id === action.payload);
      if (film) {
        state.film = film;
        state.similarFilms = filterFilms(state.films, film.genre).filter((i) => i.id !== film.id).slice(0, 4);
      }
    }
  }
});
