import {useParams} from 'react-router-dom';
import {films} from '@mocks/films.ts';
import {formatNumber} from '@components/movie-tabs/movie-tabs.ts';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';

export function Overview() {
  const {id} = useParams();
  const filmId = Number(id);
  const film = films.at(filmId);
  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{formatNumber(film.rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.slice(0, 4).join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}
