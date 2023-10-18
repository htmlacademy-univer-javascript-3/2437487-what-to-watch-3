import {ChangeEvent, FormEvent, Fragment, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm} from 'store/reducer/film-reducer/action.ts';
import {postFilmReviewAction} from 'store/api-action.ts';
import {NotFoundPage} from '@pages/not-found-page/not-found-page.tsx';

export function ReviewForm() {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const [filmRating, setFilmRating] = useState(0);
  const dispatch = useAppDispatch();
  if (!film) {
    return <NotFoundPage/>;
  }
  const doOnSubmit = (rating: number, comment: string) => {
    dispatch(postFilmReviewAction({filmId: film.id, rating, comment}))
      .then(() => navigate(`/films/${film.id}`));
  };
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filmRating && commentRef.current?.value) {
      doOnSubmit(filmRating, commentRef.current.value);
    }
  };
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilmRating(Number(evt.target.value));
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((number) => (
                <Fragment key={number}>
                  <input
                    key={`star-${number}`}
                    onChange={handleInputChange}
                    className="rating__input"
                    id={`star-${number}`}
                    type="radio"
                    name="rating"
                    value={`${number}`}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${number}`}
                  >
                    Rating ${number}
                  </label>
                </Fragment>))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            ref={commentRef}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={50}
            maxLength={400}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
