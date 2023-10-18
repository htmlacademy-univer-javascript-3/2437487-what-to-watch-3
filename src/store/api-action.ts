import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from 'types/state.ts';
import {AxiosInstance} from 'axios';
import {Film} from 'types/film.ts';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, ApiConfig>(
  'data/fetchFilms',
  async (_arg,{ extra: api}) => {
    const { data } = await api.get<Film[]>('films');
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, ApiConfig>(
  'data/fetchPromoFilm',
  async (_arg,{ extra: api}) => {
    const { data } = await api.get<Film>('films/promo');
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, ApiConfig>(
  'data/fetchFilm',
  async (id,{ extra: api}) => {
    const { data } = await api.get<Film>(`films/${id}`);
    return data;
  },
);
