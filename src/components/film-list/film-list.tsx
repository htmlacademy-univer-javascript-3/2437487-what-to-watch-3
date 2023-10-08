import {Film} from '../../types/film.ts';
import React from 'react';
import FilmCard from '../film-card/film-card.tsx';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps): React.ReactElement {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.name} {...film}/>)}
    </div>
  );
}

export default FilmList;
