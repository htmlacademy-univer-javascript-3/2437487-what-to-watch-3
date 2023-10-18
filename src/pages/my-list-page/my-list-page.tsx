import {FilmsList} from '@components/films-list/films-list.tsx';
import {Header} from '@components/header/header.tsx';
import {MyListHeader} from '@components/header/my-list-header/my-list-header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {useAppSelector} from '../../hooks';
import {getFilms} from 'store/reducer/main-reducer/action.ts';
import {getAuthStatus} from 'store/reducer/user-reducer/action.ts';
import {useNavigate} from 'react-router-dom';
import {AuthStatus} from 'types/auth-status.ts';
import {AppRoute} from 'types/app-route.ts';

export function MyListPage() {
  const films = useAppSelector(getFilms);
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  if (authStatus !== AuthStatus.Auth) {
    navigate(AppRoute.SignIn);
  }
  return (
    <div className="user-page">
      <Header isUserPage>
        <MyListHeader count={9}/>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films.slice(0, 9)} />
      </section>

      <Footer/>
    </div>
  );
}
