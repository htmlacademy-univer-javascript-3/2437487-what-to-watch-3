import {ReviewForm} from '@components/review-form/review-form.tsx';
import {Header} from '@components/header/header.tsx';
import {ReviewHeader} from '@components/header/review-header/review-header.tsx';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';
import {useAppSelector} from '../../hooks';
import {getFilm} from 'store/reducer/main-reducer/action.ts';


export function AddReviewPage() {
  const film = useAppSelector(getFilm);
  return (
    film ?
      (
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name}/>
            </div>

            <Header>
              <ReviewHeader film={film}/>
            </Header>

            <div className="film-card__poster film-card__poster--small">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>
          </div>
          <ReviewForm />
        </section>
      ) :
      (
        <NotFoundPage/>
      )
  );
}
