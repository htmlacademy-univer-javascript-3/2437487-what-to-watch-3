import {Navigate} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';
import {AuthStatusEnum} from 'types/auth-status.enum.ts';

type PrivateRouteProps = {
  authStatus: AuthStatusEnum;
  children: JSX.Element;
}

export function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthStatusEnum.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}></Navigate>
  );
}
