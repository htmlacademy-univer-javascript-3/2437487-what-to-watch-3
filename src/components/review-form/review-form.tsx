export function ReviewForm() {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((number) => (
                <>
                  <input key={`star-${number}`} className="rating__input" id={`star-${number}`} type="radio" name="rating" value={`${number}`}/>
                  <label className="rating__label" htmlFor={`star-${number}`}>Rating ${number}</label>
                </>
              ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
