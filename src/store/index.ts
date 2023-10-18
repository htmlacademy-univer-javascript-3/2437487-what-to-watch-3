import {configureStore} from '@reduxjs/toolkit';
import {reducer} from 'store/reducer/reducer.ts';
import {createAPI} from 'services/api.ts';

const api = createAPI();
export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
