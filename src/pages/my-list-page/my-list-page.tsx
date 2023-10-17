import {FilmList} from 'components/film-list/film-list.tsx';
import {Header} from '@components/header/header.tsx';
import {MyListHeader} from '@components/header/my-list-header/my-list-header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {Film} from 'types/film.ts';

export type MyListPageProps = {
  films: Film[];
}

export function MyListPage({films}: MyListPageProps) {
  return (
    <div className="user-page">
      <Header isUserPage>
        <MyListHeader count={9}/>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films.slice(0, 9)} />
      </section>

      <Footer/>
    </div>
  );
}
