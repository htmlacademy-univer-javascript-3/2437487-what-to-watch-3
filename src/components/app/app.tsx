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


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage/>}/>
          <Route path={AppRoute.SignIn} element={<SignInPage/>}/>
          <Route path={AppRoute.MyList} element=
            {
              <PrivateRoute>
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
