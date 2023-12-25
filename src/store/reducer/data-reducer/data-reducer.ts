import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, NameSpace, SHOWN_CARDS_COUNT} from '../../../const.ts';
import {DataState} from 'types/state.ts';
import {Film} from 'types/film.ts';
import {
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
  fetchSimilarFilmsAction
} from 'store/api-action.ts';

const initialState: DataState = {
  films: [],
  promoFilm: null,
  currentGenre: DEFAULT_GENRE,
  similarFilms: [],
  favoriteFilms: [],
  filteredFilms: [],
  cardCount: 0,
  isFilmsLoading: false,
  hasError: false,
};

const filterFilms = (films: Film[], genre: string): Film[] => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const dataReducer = createSlice({
  name: NameSpace.Data,
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
        state.isFilmsLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filteredFilms = action.payload;
        state.promoFilm = action.payload[0];
        state.similarFilms = action.payload;
        state.cardCount = action.payload.length > SHOWN_CARDS_COUNT ? SHOWN_CARDS_COUNT : action.payload.length;
        state.isFilmsLoading = false;
        state.hasError = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsLoading = false;
        state.hasError = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.hasError = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.similarFilms = [];
        state.hasError = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.hasError = false;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.favoriteFilms = [];
        state.hasError = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.hasError = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.promoFilm = null;
        state.hasError = true;
      });
  },
});

export const {
  changeGenre,
  increaseCardCount,
  resetMainPage
} = dataReducer.actions;
