import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from 'store';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from 'store/api-action.ts';
import {resetMainPage} from 'store/reducer/data-reducer/data-reducer.ts';
import {HistoryRouter} from '@components/history-route/history-route.tsx';
import {browserHistory} from './browser-history.ts';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());
store.dispatch(resetMainPage());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
