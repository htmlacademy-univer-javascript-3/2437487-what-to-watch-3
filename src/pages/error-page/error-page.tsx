import {useAppDispatch} from '../../hooks';
import {fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction} from 'store/api-action.ts';

import './ErrorPage.scss';

export function ErrorPage() {
  const dispatch = useAppDispatch();

  return (
    <div className="error-page">
      <p className="error__text">Не удалось загрузить страницу</p>
      <button
        onClick={() => {
          dispatch(fetchFilmsAction());
          dispatch(fetchPromoFilmAction());
          dispatch(fetchFavoriteFilmsAction());
        }}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </div>
  );
}
