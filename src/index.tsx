import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@components/app/app.tsx';
import {filmsMock} from '@mocks/films.ts';
import {Provider} from 'react-redux';
import {store} from 'store';
import {resetMainPage} from 'store/reducer/main-reducer/action.ts';
import {fetchFilmsAction} from 'store/api-action.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmsAction());
store.dispatch(resetMainPage());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={filmsMock}
      />
    </Provider>
  </React.StrictMode>
);
