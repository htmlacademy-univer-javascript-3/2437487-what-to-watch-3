import {MainPage} from '@pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignInPage} from '@pages/sign-in-page/sign-in-page.tsx';
import {MyListPage} from '@pages/my-list-page/my-list-page.tsx';
import {MoviePage} from '@pages/movie-page/movie-page.tsx';
import {PlayerPage} from '@pages/player-page/player-page.tsx';
import {AddReviewPage} from '@pages/add-review-page/add-review-page.tsx';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '@components/private-route/private-route.tsx';
import {Film} from 'types/film.ts';

type AppProps = {
  films: Film[];
};

export function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage/>}/>
          <Route path='login' element={<SignInPage/>}/>
          <Route path='mylist' element=
            {
              <PrivateRoute>
                <MyListPage {...props}/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id'>
            <Route index element={<MoviePage {...props}/>}/>
            <Route path='review' element={<AddReviewPage {...props}/>}/>
          </Route>
          <Route path='player/:id' element={<PlayerPage {...props}/>}/>
          <Route path='error404' element={<NotFoundPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
