import {Logo} from '@components/logo/logo.tsx';
import {UserBlock} from '@components/user-block/user-block.tsx';
import React, {ReactNode} from 'react';

type HeaderProps = {
  children?: ReactNode;
  isUserPage?: boolean;
  isSignInPage?: boolean;
}

export function Header({children, isUserPage = false, isSignInPage = false}: React.PropsWithChildren<HeaderProps>) {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <header className={`page-header ${isUserPage ? 'user-page__head' : ''}`}>
        <Logo isLight={false}/>
        {children}
        {isSignInPage ? <h1 className="page-title user-page__title">Sign in</h1> : <UserBlock/>}
      </header>
    </>
  );
}
