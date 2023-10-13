import type {Review as TReview} from 'types/review.ts';
import {Review} from '@components/review/review.tsx';
type ReviewsProps = {
  reviews: TReview[];
}
export function Reviews({reviews}: ReviewsProps) {
  const firstHalfReviews = reviews.slice(0, reviews.length / 2);
  const secondHalfReviews = reviews.slice(reviews.length / 2);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {secondHalfReviews.map((review) => <Review key={review.id} review={review}/>)}
      </div>
    </div>
  );
}
