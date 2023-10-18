import {Film} from 'types/film.ts';
import {Link} from 'react-router-dom';

type PlayButtonProps = {
  film: Film;
}

export function PlayButton({film}: PlayButtonProps) {
  return (
    <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}
