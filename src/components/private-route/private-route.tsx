import {Navigate} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';
import {getAuthStatus} from 'store/reducer/user-reducer/action.ts';
import {useAppSelector} from '../../hooks';
import {AuthStatus} from 'types/auth-status.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}></Navigate>
  );
}
