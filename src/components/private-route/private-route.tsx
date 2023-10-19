import {Navigate} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';
import {AuthStatus} from 'types/auth-status.ts';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}></Navigate>
  );
}
