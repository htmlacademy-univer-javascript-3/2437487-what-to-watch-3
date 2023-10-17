import type {Film} from 'types/film.ts';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {VideoPlayer} from '@components/video-player/video-player.tsx';
import {VIDEO_SRC} from '@mocks/const.ts';

type FilmCardProps = {
  film: Film;
};

export function FilmCard({film}: FilmCardProps) {
  const [needVideoToPlay, setNeedVideoToPlay] = useState(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  useEffect(() => {
    let needUpdate = true;

    if (needVideoToPlay) {
      setTimeout(() => needUpdate && setVideoIsPlaying(true), 500);
    }

    return () => {
      needUpdate = false;
    };
  }, [needVideoToPlay]);

  const handleMouseEnter = () => {
    setNeedVideoToPlay(true);
  };
  const handleMouseLeave = () => {
    setNeedVideoToPlay(false);
    setVideoIsPlaying(false);
  };
  return (
    <Link className="small-film-card__link small-film-card catalog__films-card" to={`/films/${film.id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <VideoPlayer src={VIDEO_SRC} poster={film.poster} muted isPlaying={videoIsPlaying}/>
      {!videoIsPlaying && <h3 className="small-film-card__title">The Grand Budapest Hotel</h3>}
    </Link>
  );
}
