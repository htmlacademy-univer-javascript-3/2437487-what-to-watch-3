import {FilmsList} from '@components/films-list/films-list.tsx';
import {Header} from '@components/header/header.tsx';
import {MyListHeader} from '@components/header/my-list-header/my-list-header.tsx';
import {Footer} from '@components/footer/footer.tsx';
import {useAppSelector} from '../../hooks';
import {getFilms} from 'store/reducer/main-reducer/action.ts';

export function MyListPage() {
  const films = useAppSelector(getFilms);
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
