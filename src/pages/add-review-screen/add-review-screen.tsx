import React from 'react';
import {promoFilm} from '../../mocks/films.ts';
import Logo from '../../components/logo/logo.tsx';
import ReviewForm from '../../components/review-form/review-form.tsx';

function AddReviewScreen(): React.ReactElement {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={promoFilm.name}/>  # TODO: img src should be promoFilm.bg
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

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={promoFilm.poster} alt={`${promoFilm.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

export default AddReviewScreen;
