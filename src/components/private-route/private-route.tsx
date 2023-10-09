import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = false;
  return (
    authorizationStatus
      ? children
      : <Navigate to='/login'></Navigate>
  );
}
