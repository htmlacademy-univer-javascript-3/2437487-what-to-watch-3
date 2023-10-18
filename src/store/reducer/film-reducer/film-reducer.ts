import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../../const.ts';
import {FilmState} from 'types/state.ts';
import {fetchFilmAction, fetchFilmReviewsAction} from 'store/api-action.ts';

const initialState: FilmState = {
  film: null,
  reviews: [],
};

export const filmReducer = createSlice({
  name: Namespace.Film,
  initialState: initialState,
  reducers: {},
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
      });
  },
});
