import {Navigate} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = true;
  return (
    authorizationStatus
      ? children
      : <Navigate to={AppRoute.SignIn}></Navigate>
  );
}
