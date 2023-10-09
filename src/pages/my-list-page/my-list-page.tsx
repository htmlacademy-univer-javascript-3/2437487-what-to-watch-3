import {FilmsList} from '@components/films-list/films-list.tsx';
import {films} from '@mocks/films.ts';
import {Logo} from '@components/logo/logo.tsx';
import {Header} from '@components/header/header.tsx';
import {MyListHeader} from '@components/header/my-list-header/my-list-header.tsx';

export function MyListPage() {
  return (
    <div className="user-page">
      <Header isUserPage>
        <MyListHeader count={9}/>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films.slice(0, 9)} />
      </section>

      <footer className="page-footer">
        <Logo isLight/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
