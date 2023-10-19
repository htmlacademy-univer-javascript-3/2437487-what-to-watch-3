import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {dataReducer} from 'store/reducer/data-reducer/data-reducer.ts';
import {userReducer} from 'store/reducer/user-reducer/user-reducer.ts';
import {filmReducer} from 'store/reducer/film-reducer/film-reducer.ts';

export const reducer = combineReducers({
  [NameSpace.Data]: dataReducer.reducer,
  [NameSpace.User]: userReducer.reducer,
  [NameSpace.Film]: filmReducer.reducer,
});
