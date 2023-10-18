import {FilmsList} from '@components/films-list/films-list.tsx';
import {Header} from '@components/header/header.tsx';
import {Link, useParams} from 'react-router-dom';
import {Footer} from '@components/footer/footer.tsx';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';
import {AddInListButton} from '@components/add-in-list-button/add-in-list-button.tsx';
import {MovieTabs} from '@components/movie-tabs/movie-tabs.tsx';
import {PlayButton} from '@components/play-button/play-button.tsx';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getFilms, getSimilarFilms} from 'store/reducer/main-reducer/action.ts';
import {fetchFilmAction, fetchSimilarFilmsAction} from 'store/api-action.ts';


export function MoviePage() {
  const id = useParams().id || '';
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const films = useAppSelector(getFilms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (!film || film.id !== id) {
        dispatch(fetchFilmAction(id));
        dispatch(fetchSimilarFilmsAction(id));
      }
    }
    return () => {
      isMounted = false;
    };
  }, [id, film, dispatch]);
  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton/>
                <AddInListButton film={film}/>
                <Link to={`/films/${film.id}/review/`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>

            <MovieTabs films={films}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <Footer/>
      </div>
    </>
  );
}
