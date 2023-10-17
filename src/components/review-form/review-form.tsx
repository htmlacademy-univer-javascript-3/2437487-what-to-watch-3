import {ChangeEvent, FormEvent, Fragment, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import type {Review} from 'types/review.ts';
import {useAppSelector} from '../../hooks';
import {getFilm} from 'store/reducer/main-reducer/action.ts';

export function ReviewForm() {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const [reviewForm, setReviewForm] = useState<Review>({
    id: 0,
    text: '',
    author: '',
    date: '',
    rating: 0,
    filmId: film.id,
  });
  const doOnSubmit = (rating: number, comment: string) => {
    const review: Review = {
      id: film.id,
      text: comment,
      author: 'somebody',
      date: '2023-10-10',
      rating: rating,
      filmId: film.id,
    };
    setReviewForm(review);
    navigate(`/films/${film.id}`);
  };
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (reviewForm.rating && commentRef.current?.value) {
      doOnSubmit(reviewForm.rating, commentRef.current.value);
    }
  };
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setReviewForm((prevValue) => ({
      ...prevValue,
      rating: Number(evt.target.value)
    }));
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
