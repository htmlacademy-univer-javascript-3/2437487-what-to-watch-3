import {Film} from 'types/film.ts';
import {store} from 'store';
import {User} from 'types/user.ts';
import {AuthStatus} from 'types/auth-status.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type MainState = {
  films: Film[];
  promoFilm: Film | null;
  currentGenre: string;
  similarFilms: Film[];
  favoriteFilms: Film[];
  filteredFilms: Film[];
  film: Film | null;
  cardCount: number;
  isFilmsLoaded: boolean;
}

export type UserState = {
  user: User | null;
  authStatus: AuthStatus;
}
