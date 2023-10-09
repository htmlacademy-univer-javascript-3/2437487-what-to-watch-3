import {Logo} from '@components/logo/logo.tsx';
import {Copyright} from '@components/copyright/copyright.tsx';

export function Footer() {
  return (
    <footer className="page-footer">
      <Logo isLight/>
      <Copyright/>
    </footer>
  );
}
