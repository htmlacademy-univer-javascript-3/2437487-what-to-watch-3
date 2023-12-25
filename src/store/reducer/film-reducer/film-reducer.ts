import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../const.ts';
import {FilmState} from 'types/state.ts';
import {fetchFilmAction, fetchFilmReviewsAction, postFavoriteFilmAction} from 'store/api-action.ts';

const initialState: FilmState = {
  film: null,
  reviews: [],
};

export const filmReducer = createSlice({
  name: NameSpace.Film,
  initialState: initialState,
  reducers: {
    resetFilmState: (state) => {
      state.film = null;
      state.reviews = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.film = null;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchFilmReviewsAction.rejected, (state) => {
        state.reviews = [];
      })
      .addCase(postFavoriteFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  },
});

export const {resetFilmState} = filmReducer.actions;
