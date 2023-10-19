import {MainPage} from '@pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInPage} from '@pages/sign-in-page/sign-in-page.tsx';
import {MyListPage} from '@pages/my-list-page/my-list-page.tsx';
import {MoviePage} from '@pages/movie-page/movie-page.tsx';
import {PlayerPage} from '@pages/player-page/player-page.tsx';
import {AddReviewPage} from '@pages/add-review-page/add-review-page.tsx';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '@components/private-route/private-route.tsx';
import {AppRoute} from 'types/app-route.ts';
import {useAppSelector} from '../../hooks';
import {getAuthCheckedStatus, getAuthStatus} from 'store/reducer/user-reducer/selectors.ts';
import {Loader} from '@components/loader/loader.tsx';
import {getFilmsErrorStatus, getFilmsLoadingStatus} from 'store/reducer/data-reducer/selectors.ts';


export function App() {
  const authStatus = useAppSelector(getAuthStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsLoading = useAppSelector(getFilmsLoadingStatus);
  const hasError = useAppSelector(getFilmsErrorStatus);
  if (!isAuthChecked || isFilmsLoading) {
    return (
      <Loader text="Loading..."/>
    );
  }
  if (hasError) {
    return (
      <NotFoundPage/>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage/>}/>
          <Route path={AppRoute.SignIn} element={<SignInPage/>}/>
          <Route path={AppRoute.MyList} element=
            {
              <PrivateRoute authStatus={authStatus}>
                <MyListPage/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film}>
            <Route index element={<MoviePage/>}/>
            <Route path={AppRoute.FilmReview} element={<AddReviewPage/>}/>
          </Route>
          <Route path={AppRoute.Player} element={<PlayerPage/>}/>
          <Route path={AppRoute.Error404} element={<NotFoundPage/>}/>
          <Route path={AppRoute.Default} element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
