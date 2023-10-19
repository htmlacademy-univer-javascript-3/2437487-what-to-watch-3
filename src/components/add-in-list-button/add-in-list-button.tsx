import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus} from 'store/reducer/user-reducer/selectors.ts';
import {AuthStatus} from 'types/auth-status.ts';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';
import {fetchFavoriteFilmsAction, fetchFilmAction, postFavoriteFilmAction} from 'store/api-action.ts';
import {getFavoriteFilms} from 'store/reducer/data-reducer/selectors.ts';
// import {useEffect} from 'react';

type AddInListButtonProps = {
  filmId: string;
  isFavorite: boolean;
}

export function AddInListButton({filmId, isFavorite}: AddInListButtonProps) {
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     dispatch(fetchFavoriteFilmsAction());
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [dispatch, isFavorite]);
  const handleButtonClick = () => {
    if (authStatus !== AuthStatus.Auth) {
      navigate(AppRoute.SignIn);
    }
    dispatch(postFavoriteFilmAction({filmId: filmId, status: !isFavorite}));
    dispatch(fetchFavoriteFilmsAction());
    dispatch(fetchFilmAction(filmId));
  };
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleButtonClick}>
      {
        isFavorite ?
          (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
          ) :
          (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
          )
      }
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}
