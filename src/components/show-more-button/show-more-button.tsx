import {useAppDispatch} from '../../hooks';
import {MouseEvent} from 'react';
import {increaseCardCount} from 'store/reducer/data-reducer/data-reducer.ts';

export function ShowMoreButton() {
  const dispatch = useAppDispatch();
  const handleButtonClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(increaseCardCount());
  };
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleButtonClick}>Show more</button>
    </div>
  );
}
