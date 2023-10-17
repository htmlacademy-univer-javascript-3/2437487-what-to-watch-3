import {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {films} from '@mocks/films.ts';
import type {Review} from 'types/review.ts';

export function ReviewForm() {
  const [filmRating, setFilmRating] = useState(0);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const film = films[0];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reviewForm, setReviewForm] = useState<Review>({
    id: 0,
    text: '',
    author: '',
    date: '',
    rating: 0,
    filmId: film.id,
  });
  const onSubmit = (rating: number, comment: string) => {
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
  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (filmRating && commentRef.current?.value) {
      onSubmit(filmRating, commentRef.current.value);
    }
  };
  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilmRating(Number(evt.target.value));
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={submitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((number) => (
                <>
                  <input
                    key={`star-${number}`}
                    onChange={changeHandler}
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
                </>
              ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea ref={commentRef} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">{reviewForm.text}</textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
