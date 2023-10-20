import {FilmsList} from '@components/films-list/films-list.tsx';
import {Header} from '@components/header/header.tsx';
import {MyListHeader} from '@components/header/my-list-header/my-list-header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms} from 'store/reducer/data-reducer/selectors.ts';
import {getAuthStatus} from 'store/reducer/user-reducer/selectors.ts';
import {useNavigate} from 'react-router-dom';
import {AuthStatus} from 'types/auth-status.ts';
import {AppRoute} from 'types/app-route.ts';
import {useEffect} from 'react';
import {fetchFavoriteFilmsAction} from 'store/api-action.ts';

export function MyListPage() {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  if (authStatus !== AuthStatus.Auth) {
    navigate(AppRoute.SignIn);
  }
  useEffect(() => {
    if (authStatus !== AuthStatus.Auth) {
      navigate(AppRoute.SignIn);
    }
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, navigate, dispatch]);
  return (
    <div className="user-page">
      <Header isUserPage>
        <MyListHeader count={favoriteFilms.length}/>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={favoriteFilms} />
      </section>

      <Footer/>
    </div>
  );
}
