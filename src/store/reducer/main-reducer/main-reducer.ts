import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, Namespace, SHOWN_CARDS_COUNT} from '../../../const.ts';
import {MainState} from 'types/state.ts';
import {Film} from 'types/film.ts';
// import {filmsMock} from '@mocks/films.ts';
import {fetchFilmAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction} from 'store/api-action.ts';

const initialState: MainState = {
  films: [],
  promoFilm: null,
  currentGenre: DEFAULT_GENRE,
  similarFilms: [],
  favoriteFilms: [],
  filteredFilms: [],
  film: null,
  cardCount: 0,
  isFilmsLoaded: false,
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
      state.cardCount = filteredFilms.length > SHOWN_CARDS_COUNT ? SHOWN_CARDS_COUNT : filteredFilms.length;
    },
    increaseCardCount: (state) => {
      state.cardCount = (state.cardCount + SHOWN_CARDS_COUNT > state.filteredFilms.length) ?
        state.filteredFilms.length :
        state.cardCount + SHOWN_CARDS_COUNT;
    },
    resetMainPage: (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.filteredFilms.length > SHOWN_CARDS_COUNT ? SHOWN_CARDS_COUNT : state.filteredFilms.length;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsLoaded = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filteredFilms = action.payload;
        state.promoFilm = action.payload[0];
        state.similarFilms = action.payload;
        state.cardCount = action.payload.length > SHOWN_CARDS_COUNT ? SHOWN_CARDS_COUNT : action.payload.length;
        state.isFilmsLoaded = true;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsLoaded = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.film = null;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.similarFilms = [];
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.promoFilm = null;
      });
  },
});
