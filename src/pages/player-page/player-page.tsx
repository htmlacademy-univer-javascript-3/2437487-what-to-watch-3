import {Link, useParams} from 'react-router-dom';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';

import './Player.css';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmAction} from 'store/api-action.ts';
import {getFilm} from 'store/reducer/film-reducer/action.ts';

export function PlayerPage() {
  const id = useParams().id || '';
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (!film || film.id !== id) {
        dispatch(fetchFilmAction(id));
      }
    }
    return () => {
      isMounted = false;
    };
  }, [id, film, dispatch]);
  if (!film) {
    return <NotFoundPage/>;
  }
  const isPlaying = true;
  return (
    <div className="player">
      <video src="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm" className="player__video" poster="img/player-poster.jpg"></video>

      <Link to={`/films/${film.id}/`}>
        <button type="button" className="player__exit">Exit</button>
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ? (
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          ) : (
            <button type="button" className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          )}
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
