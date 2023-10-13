import {Link} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';

type LogoProps = {
  isLight?: boolean;
}

export function Logo({isLight = false}: LogoProps) {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={`logo__link ${isLight ? 'logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
