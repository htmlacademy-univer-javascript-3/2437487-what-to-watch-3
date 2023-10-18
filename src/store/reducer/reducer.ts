import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../../const.ts';
import {mainReducer} from 'store/reducer/main-reducer/main-reducer.ts';
import {userReducer} from 'store/reducer/user-reducer/user-reducer.ts';

export const reducer = combineReducers({
  [Namespace.Main]: mainReducer.reducer,
  [Namespace.User]: userReducer.reducer,
});
