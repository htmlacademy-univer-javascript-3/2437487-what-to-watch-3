import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from 'types/state.ts';
import {AxiosInstance} from 'axios';
import {Film} from 'types/film.ts';
import {AuthData, User} from 'types/user.ts';
import {Review} from 'types/review.ts';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmAction = createAsyncThunk<Film, string, ApiConfig>(
  'data/fetchFilm',
  async (id: string, { extra: api}) => {
    const { data } = await api.get<Film>(`films/${id}`);
    return data;
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<Review[], string, ApiConfig>(
  'data/fetchFilmReviews',
  async (id: string, { extra: api}) => {
    const { data } = await api.get<Review[]>(`comments/${id}`);
    return data;
  },
);

export const postFilmReviewAction = createAsyncThunk<void, {filmId: string; comment: string; rating: number}, ApiConfig>(
  'data/postFilmReview',
  async ({comment, rating, filmId}, { extra: api}) => {
    await api.post<Review>(`comments/${filmId || ''}`, {comment, rating});
  },
);

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
    const { data } = await api.get<Film>('promo');
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string, ApiConfig>(
  'data/fetchSimilarFilms',
  async (id: string, { extra: api}) => {
    const { data } = await api.get<Film[]>(`films/${id}/similar`);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, ApiConfig>(
  'data/fetchFavoriteFilms',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<Film[]>('favorite');
    return data;
  },
);

export const postFavoriteFilmAction = createAsyncThunk<Film, { filmId: string; status: boolean }, ApiConfig>(
  'data/postFavoriteFilm',
  async ({ filmId, status }, { extra: api}) => {
    const { data } = await api.post<Film>(`favorite/${filmId}/${status ? 1 : 0}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<User, undefined, ApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<User>('login');
    return data;
  },
);

export const loginAction = createAsyncThunk<User, AuthData, ApiConfig>(
  'user/login',
  async ({login: email, password}, { extra: api}) => {
    const {data} = await api.post<User>('login', {email, password });
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete('logout');
  },
);
