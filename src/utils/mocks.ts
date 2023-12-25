import {Action} from 'redux';
import {createAPI} from 'services/api.ts';
import { ThunkDispatch } from 'redux-thunk';
import {State} from 'types/state.ts';

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
