import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../../const.ts';
import {mainReducer} from 'store/reducer/main-reducer/main-reducer.ts';

export const reducer = combineReducers({
  [Namespace.Main]: mainReducer.reducer,
});
