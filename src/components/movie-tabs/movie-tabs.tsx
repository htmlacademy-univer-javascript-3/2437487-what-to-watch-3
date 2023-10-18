import {MovieTabEnum} from 'types/movie-tab.enum.ts';
import {Details} from '@components/movie-tabs/details/details.tsx';
import {Reviews} from '@components/movie-tabs/reviews/reviews.tsx';
import {Overview} from '@components/movie-tabs/overview/overview.tsx';
import {useState} from 'react';
// import {reviews} from '@mocks/reviews.ts';
import {MovieTab} from '@components/movie-tabs/movie-tab.tsx';
import {getReviews} from 'store/reducer/film-reducer/action.ts';
import {useAppSelector} from '../../hooks';


export function MovieTabs() {
  const [movieTab, setMovieTab] = useState<MovieTabEnum>(MovieTabEnum.Overview);
  const reviews = useAppSelector(getReviews);
  const getCurrentTab = (tab: string) => {
    switch (tab) {
      case MovieTabEnum.Reviews:
        return <Reviews reviews={reviews}/>;
      case MovieTabEnum.Details:
        return <Details/>;
      case MovieTabEnum.Overview:
        return <Overview/>;
    }
  };
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.values(MovieTabEnum).map((currentTab) =>
              <MovieTab key={currentTab} name={currentTab} onClick={setMovieTab} isActive={movieTab === currentTab}/>
            )
          }
        </ul>
      </nav>
      {getCurrentTab(movieTab)}
    </div>
  );
}
