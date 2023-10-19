import {Logo} from '@components/logo/logo.tsx';
import {Copyright} from '@components/copyright/copyright.tsx';
import {memo} from 'react';

export function FooterComponent() {
  return (
    <footer className="page-footer">
      <Logo isLight/>
      <Copyright/>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
