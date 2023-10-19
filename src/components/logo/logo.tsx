import {Link} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';
import {useAppDispatch} from '../../hooks';
import {resetMainPage} from 'store/reducer/data-reducer/selectors.ts';

type LogoProps = {
  isLight?: boolean;
}

export function Logo({isLight = false}: LogoProps) {
  const dispatch = useAppDispatch();
  const handleLinkClick = () => {
    dispatch(resetMainPage());
  };
  return (
    <div className="logo">
      <Link to={AppRoute.Main} onClick={handleLinkClick} className={`logo__link ${isLight ? 'logo__link--light' : ''}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
