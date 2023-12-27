import {FilmsList} from '@components/films-list/films-list.tsx';
import {Header} from '@components/header/header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {ShowMoreButton} from '@components/show-more-button/show-more-button.tsx';
import {AddInListButton} from '@components/add-in-list-button/add-in-list-button.tsx';
import {PlayButton} from '@components/play-button/play-button.tsx';
import {getCardCount, getFilteredFilms, getPromoFilm} from 'store/reducer/data-reducer/selectors.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {GenresList} from '@components/genres-list/genres-list.tsx';
import {fetchFavoriteFilmsAction} from 'store/api-action.ts';
import {useEffect} from 'react';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';


export function MainPage() {
  const cardCount = useAppSelector(getCardCount);
  const promoFilm = useAppSelector(getPromoFilm);
  const films = useAppSelector(getFilteredFilms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchFavoriteFilmsAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, promoFilm]);
  if (!promoFilm) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={promoFilm.id}/>
                <AddInListButton filmId={promoFilm.id} isFavorite={promoFilm.isFavorite}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <FilmsList films={films.slice(0, cardCount)}/>

          {cardCount !== films.length && <ShowMoreButton/>}
        </section>

        <Footer/>
      </div>
    </>
  );
}
