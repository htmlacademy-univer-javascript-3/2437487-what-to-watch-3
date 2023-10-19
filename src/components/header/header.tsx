import {Logo} from '@components/logo/logo.tsx';
import {UserBlock} from '@components/user-block/user-block.tsx';
import React, {memo, ReactNode} from 'react';

type HeaderProps = {
  children?: ReactNode;
  isUserPage?: boolean;
  isSignInPage?: boolean;
}

export function HeaderComponent({children, isUserPage = false, isSignInPage = false}: React.PropsWithChildren<HeaderProps>) {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <header className={`page-header ${isUserPage ? 'user-page__head' : ''}`}>
        <Logo/>
        {children}
        {isSignInPage ? <h1 className="page-title user-page__title">Sign in</h1> : <UserBlock/>}
      </header>
    </>
  );
}

export const Header = memo(HeaderComponent);
