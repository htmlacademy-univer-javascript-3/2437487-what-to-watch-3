import {MovieTabEnum} from 'types/movie-tab.enum.ts';
import {Details} from '@components/movie-tabs/details/details.tsx';
import {Reviews} from '@components/movie-tabs/reviews/reviews.tsx';
import {Overview} from '@components/movie-tabs/overview/overview.tsx';
import {useState} from 'react';
import {reviews} from '@mocks/reviews.ts';
import {Film} from 'types/film.ts';
import {MovieTab} from '@components/movie-tabs/movie-tab.tsx';

type MovieTabsProps = {
  films: Film[];
}

export function MovieTabs({films}: MovieTabsProps) {
  const [movieTab, setMovieTab] = useState<MovieTabEnum>(MovieTabEnum.Overview);
  const getCurrentTab = (tab: string) => {
    switch (tab) {
      case MovieTabEnum.Reviews:
        return <Reviews reviews={reviews}/>;
      case MovieTabEnum.Details:
        return <Details films={films}/>;
      case MovieTabEnum.Overview:
        return <Overview films={films}/>;
    }
  };
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.values(MovieTabEnum).map((currentTab) =>
              <MovieTab key={currentTab} name={currentTab} onClick={setMovieTab} isActive={movieTab === currentTab}/>
              // (
              //   <li key={currentTab} className={`film-nav__item ${movieTab === currentTab ? ' film-nav__item--active' : ''}`}>
              //     <div onClick={() => setMovieTab(currentTab)} className="film-nav__link">{currentTab}</div>
              //   </li>
              // )
            )
          }
        </ul>
      </nav>
      {getCurrentTab(movieTab)}
    </div>
  );
}
