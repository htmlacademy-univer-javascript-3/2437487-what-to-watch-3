import type {Review} from 'types/review.ts';
import {formatNumber} from '@components/movie-tabs/movie-tabs.ts';

type ReviewProps = {
  review: Review;
}

export function Review({review}: ReviewProps) {
  const convertDateFormat = (inputDate: string) => {
    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={convertDateFormat(review.date)}>{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatNumber(review.rating)}</div>
    </div>
  );
}
