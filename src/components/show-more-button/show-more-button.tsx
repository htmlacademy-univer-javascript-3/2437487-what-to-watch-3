import {useAppDispatch} from '../../hooks';
import {increaseCardCount} from 'store/reducer/main-reducer/action.ts';
import {MouseEvent} from 'react';

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
