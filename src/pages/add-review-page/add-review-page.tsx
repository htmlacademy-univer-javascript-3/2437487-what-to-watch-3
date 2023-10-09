import {promoFilm} from '@mocks/films.ts';
import {ReviewForm} from '@components/review-form/review-form.tsx';
import {Header} from '@components/header/header.tsx';
import {ReviewHeader} from '@components/header/review-header/review-header.tsx';

export function AddReviewPage() {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={promoFilm.background} alt={promoFilm.name}/>
        </div>

        <Header>
          <ReviewHeader/>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={promoFilm.poster} alt={`${promoFilm.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}
