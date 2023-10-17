import type {Film} from 'types/film.ts';
import {FilmCard} from '@components/film-card/film-card.tsx';

type FilmListProps = {
  films: Film[];
}

export function FilmList({films}: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </div>
  );
}
