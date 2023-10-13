import type {Film} from 'types/film.ts';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  film: Film;
};

export function FilmCard({film}: FilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.poster} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
