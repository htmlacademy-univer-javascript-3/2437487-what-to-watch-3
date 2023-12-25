import type {Review} from 'types/review.ts';
import {formatNumber} from '../../utils/formatNumber.ts';
import {convertDate, convertDateFormat} from '../../utils/convertDate.ts';

type ReviewProps = {
  review: Review;
}

export function Review({review}: ReviewProps) {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={convertDateFormat(review.date)}>{convertDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatNumber(review.rating)}</div>
    </div>
  );
}
