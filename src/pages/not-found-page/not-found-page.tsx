import {Link} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';

export function NotFoundPage() {
  return (
    <>
      <p><strong>404 Not Found</strong></p>
      <Link to={AppRoute.Main}>To Main Page</Link>
    </>
  );
}
