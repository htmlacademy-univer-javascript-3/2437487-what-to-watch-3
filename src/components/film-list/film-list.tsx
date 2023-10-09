import type {Film} from 'typings/film.ts';
import {FilmCard} from 'components/film-card/film-card.tsx';

type FilmListProps = {
  films: Film[];
}

export function FilmList({films}: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.name} {...film}/>)}
    </div>
  );
}
