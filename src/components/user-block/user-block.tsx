import {AuthStatus} from 'types/auth-status.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from 'types/app-route.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus, getUser} from 'store/reducer/user-reducer/action.ts';
import {logoutAction} from 'store/api-action.ts';
import {MouseEvent} from 'react';

export function UserBlock() {
  const authStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleSignOutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  return (
    authStatus === AuthStatus.Auth ?
      (
        <ul className="user-block">
          <li className="user-block__item">
            <Link to={AppRoute.MyList} className="user-block__link">
              <div className="user-block__avatar">
                <img src={user ? user.avatarUrl : 'img/avatar.jpg'} alt="User avatar" width="63" height="63"/>
              </div>
            </Link>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.Main} className="user-block__link" onClick={handleSignOutClick}>Sign out</Link>
          </li>
        </ul>
      ) :
      (
        <div className="user-block">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </div>
      )
  );
}
