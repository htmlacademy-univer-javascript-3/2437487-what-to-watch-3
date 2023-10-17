import type {Film} from 'types/film.ts';
import {FilmList} from 'components/film-list/film-list.tsx';
import {Header} from '@components/header/header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {ShowMoreButton} from '@components/show-more-button/show-more-button.tsx';
import {AddInListButton} from '@components/add-in-list-button/add-in-list-button.tsx';
import {PlayButton} from '@components/play-button/play-button.tsx';

export type MainPageProps = {
  promoFilm: Film;
  films: Film[];
}

export function MainPage({promoFilm, films} : MainPageProps) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.background} alt={promoFilm.name}/>
        </div>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.poster} alt={`${promoFilm.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton/>
                <AddInListButton film={promoFilm}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="/" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <FilmList films={films.slice(1)}/>

          <ShowMoreButton/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
