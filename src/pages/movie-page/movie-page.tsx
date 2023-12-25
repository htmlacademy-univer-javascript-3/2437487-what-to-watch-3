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
import {getFilmsErrorStatus, getSimilarFilms} from 'store/reducer/data-reducer/selectors.ts';
import {fetchFilmAction, fetchFilmReviewsAction, fetchSimilarFilmsAction} from 'store/api-action.ts';
import {getFilm} from 'store/reducer/film-reducer/selectors.ts';
import {getAuthStatus} from 'store/reducer/user-reducer/selectors.ts';
import {AuthStatusEnum} from 'types/auth-status.enum.ts';
import {resetFilmState} from 'store/reducer/film-reducer/film-reducer.ts';
import {Loader} from '@components/loader/loader.tsx';


export function MoviePage() {
  const id = useParams().id || '';
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(resetFilmState());
      dispatch(fetchFilmReviewsAction(id));
      dispatch(fetchFilmAction(id));
      dispatch(fetchSimilarFilmsAction(id));
    }
    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authStatus = useAppSelector(getAuthStatus);
  const filmErrorStatus = useAppSelector(getFilmsErrorStatus);
  if (!film) {
    return (
      <Loader text="Loading..."/>
    );
  }
  if (filmErrorStatus) {
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
                <PlayButton filmId={film.id}/>
                <AddInListButton filmId={film.id} isFavorite={film.isFavorite}/>
                {authStatus === AuthStatusEnum.Auth && <Link to={`/films/${film.id}/review/`} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>

            <MovieTabs/>
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
