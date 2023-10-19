import {Header} from '@components/header/header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus} from 'store/reducer/user-reducer/selectors.ts';
import {useNavigate} from 'react-router-dom';
import {AuthStatus} from 'types/auth-status.ts';
import {AppRoute} from 'types/app-route.ts';
import {AuthData} from 'types/user.ts';
import {loginAction} from 'store/api-action.ts';
import {FormEvent} from 'react';

export function SignInPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();
  if (authStatus === AuthStatus.Auth) {
    navigate(AppRoute.Main);
  }
  const checkEmail = (email: string) => {
    const reEmail = /\S+@\S+\.\S+/;
    const result = reEmail.test(email);
    setIsInvalidEmail(!result);
    return result;
  };
  const checkPassword = (password: string) => {
    const rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const result = rePassword.test(password);
    setIsInvalidPassword(!result);
    return result;
  };
  const onSubmit = (authData: AuthData) =>
    dispatch(loginAction(authData))
      .then(() => {
        if (authStatus === AuthStatus.Auth) {
          navigate(AppRoute.Main);
        }
      })
      .catch(() => setIsError(true));
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null
      && passwordRef.current !== null
      && checkEmail(emailRef.current.value)
      && checkPassword(passwordRef.current.value)) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      onSubmit({login: email, password});
    }
  };
  return (
    <div className="user-page">
      <Header isSignInPage isUserPage/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
          {
            isInvalidEmail &&
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>
          }
          {
            isInvalidPassword &&
            <div className="sign-in__message">
              <p>Please enter a valid password</p>
            </div>
          }
          {
            isError &&
            <div className="sign-in__message">
              <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className={`sign-in__field ${isInvalidEmail ? 'sign-in__field--error' : ''}`}>
              <input className="sign-in__input" ref={emailRef} type="email" placeholder="Email address" name="user-email" id="user-email"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${isInvalidPassword ? 'sign-in__field--error' : ''}`}>
              <input className="sign-in__input" ref={passwordRef} type="password" placeholder="Password" name="user-password" id="user-password"/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}
