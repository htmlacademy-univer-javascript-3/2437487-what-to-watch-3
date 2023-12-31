import {State} from 'types/state.ts';
import {User} from 'types/user.ts';
import {NameSpace} from '../../../const.ts';
import {AuthStatusEnum} from 'types/auth-status.enum.ts';

export const getUser = (state: Pick<State, NameSpace.User>): User | null => state[NameSpace.User].user;
export const getAuthStatus = (state: Pick<State, NameSpace.User>): AuthStatusEnum => state[NameSpace.User].authStatus;
export const getAuthCheckedStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authStatus !== AuthStatusEnum.Unknown;
