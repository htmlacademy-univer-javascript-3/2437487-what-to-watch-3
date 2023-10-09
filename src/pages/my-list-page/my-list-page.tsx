import {FilmsList} from '@components/films-list/films-list.tsx';
import {films} from '@mocks/films.ts';
import {Header} from '@components/header/header.tsx';
import {MyListHeader} from '@components/header/my-list-header/my-list-header.tsx';
import {Footer} from '@components/footer/footer.tsx';

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

      <Footer/>
    </div>
  );
}
