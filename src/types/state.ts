import {Film} from 'types/film.ts';
import {store} from 'store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type MainState = {
  films: Film[];
  promoFilm: Film | null;
  currentGenre: string;
  similarFilms: Film[];
  favoriteFilms: Film[];
  filteredFilms: Film[];
}
