import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from 'store';
import {resetMainPage} from 'store/reducer/data-reducer/selectors.ts';
import {checkAuthAction, fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction} from 'store/api-action.ts';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());
store.dispatch(resetMainPage());
store.dispatch(fetchFavoriteFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
