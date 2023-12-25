import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from 'store';
import {checkAuthAction, fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction} from 'store/api-action.ts';
import {resetMainPage} from 'store/reducer/data-reducer/data-reducer.ts';
import {ToastContainer} from 'react-toastify';
import {HistoryRouter} from '@components/history-route/history-route.tsx';
import {browserHistory} from './browser-history.ts';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(resetMainPage());
store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(fetchFavoriteFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
