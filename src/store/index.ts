import {configureStore} from '@reduxjs/toolkit';
import {reducer} from 'store/reducer/reducer.ts';

export const store = configureStore({
  reducer: reducer,
});
