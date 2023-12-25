
import { DEFAULT_GENRE, SHOWN_CARDS_COUNT } from '../../../const.ts';
import {DataState} from 'types/state.ts';
import {filmsMock} from '../../../mocks/films.ts';
import {fetchFilmsAction} from 'store/api-action.ts';
import {dataReducer} from 'store/reducer/data-reducer/data-reducer.ts';

describe('dataReducer', () => {
  let initialState: DataState;

  beforeEach(() => {
    initialState = {
      films: [],
      promoFilm: null,
      currentGenre: DEFAULT_GENRE,
      similarFilms: [],
      favoriteFilms: [],
      filteredFilms: filmsMock,
      cardCount: 0,
      isFilmsLoading: false,
      hasError: false,
    };
  });

  it('should handle changeGenre', () => {
    const action = { type: dataReducer.actions.changeGenre.type, payload: 'Comedy' };
    const state = dataReducer.reducer(initialState, action);
    expect(state.currentGenre).toEqual('Comedy');
  });

  it('should handle increaseCardCount', () => {
    const action = { type: dataReducer.actions.increaseCardCount.type };
    const state = dataReducer.reducer(initialState, action);
    expect(state.cardCount).toEqual(SHOWN_CARDS_COUNT);
  });

  it('should handle resetMainPage', () => {
    const action = { type: dataReducer.actions.resetMainPage.type };
    const state = dataReducer.reducer(initialState, action);
    expect(state.currentGenre).toEqual(DEFAULT_GENRE);
    expect(state.filteredFilms).toEqual(initialState.films);
    expect(state.cardCount).toEqual(0);
  });

  it('should handle fetchFilmsAction.pending', () => {
    const action = { type: fetchFilmsAction.pending.type };
    const state = dataReducer.reducer(initialState, action);
    expect(state.isFilmsLoading).toEqual(true);
    expect(state.hasError).toEqual(false);
  });

  it('should handle fetchFilmsAction.fulfilled', () => {
    const action = { type: fetchFilmsAction.fulfilled.type, payload: filmsMock };
    const state = dataReducer.reducer(initialState, action);
    expect(state.films).toEqual(filmsMock);
    expect(state.filteredFilms).toEqual(filmsMock);
    expect(state.promoFilm).toEqual(filmsMock[0]);
    expect(state.similarFilms).toEqual(filmsMock);
    expect(state.cardCount).toEqual(filmsMock.length > SHOWN_CARDS_COUNT ? SHOWN_CARDS_COUNT : filmsMock.length);
    expect(state.isFilmsLoading).toEqual(false);
  });

  it('should handle fetchFilmsAction.rejected', () => {
    const action = { type: fetchFilmsAction.rejected.type };
    const state = dataReducer.reducer(initialState, action);
    expect(state.isFilmsLoading).toEqual(false);
    expect(state.hasError).toEqual(true);
  });
});
