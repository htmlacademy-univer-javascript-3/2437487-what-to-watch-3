import {MovieTabEnum} from 'types/movie-tab.enum.ts';
import {Details} from '@components/movie-tabs/details/details.tsx';
import {Reviews} from '@components/movie-tabs/reviews/reviews.tsx';
import {Overview} from '@components/movie-tabs/overview/overview.tsx';
import {useState} from 'react';

export function MovieTabs() {
  const [movieTab, setMovieTab] = useState<MovieTabEnum>(MovieTabEnum.Overview);
  const getCurrentTab = (tab: string) => {
    switch (tab) {
      case MovieTabEnum.Reviews:
        return <Reviews/>;
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
              (
                <li key={currentTab} className={`film-nav__item ${movieTab === currentTab ? ' film-nav__item--active' : ''}`}>
                  <div onClick={() => setMovieTab(currentTab)} className="film-nav__link">{currentTab}</div>
                </li>
              ))
          }
        </ul>
      </nav>
      {getCurrentTab(movieTab)}
    </div>
  );
}
