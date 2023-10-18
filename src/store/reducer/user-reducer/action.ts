import {State} from 'types/state.ts';
import {User} from 'types/user.ts';
import {Namespace} from '../../../const.ts';

export const getUser = (state: State): User | null => state[Namespace.User].user;
export const getAuthStatus = (state: State): string => state[Namespace.User].authStatus;
