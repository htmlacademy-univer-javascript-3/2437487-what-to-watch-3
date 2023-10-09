import {promoFilm} from '@mocks/films.ts';
import {Link} from 'react-router-dom';

export function ReviewHeader() {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`films/${promoFilm.id}/`} className="breadcrumbs__link">{promoFilm.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}
