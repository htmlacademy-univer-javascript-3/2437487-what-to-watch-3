import React from 'react';
import {promoFilm} from '../../mocks/films.ts';
import {Logo} from '../../components/logo/logo.tsx';
import {ReviewForm} from '../../components/review-form/review-form.tsx';
import {UserBlock} from '../../components/user-block/user-block.tsx';

export function AddReviewScreen(): React.ReactElement {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={promoFilm.background} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{promoFilm.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={promoFilm.poster} alt={`${promoFilm.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}
