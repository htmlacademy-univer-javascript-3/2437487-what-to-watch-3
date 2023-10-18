import {Link} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';

import './NotFoundPage.scss';

export function NotFoundPage() {
  return (
    <div className="error-404">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to={AppRoute.Main}>To Main Page</Link>
    </div>
  );
}
