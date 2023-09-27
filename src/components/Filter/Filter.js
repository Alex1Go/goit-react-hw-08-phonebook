import { setFilter } from 'redux/filterSlice';
import { selectValueFilter } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const value = useSelector(selectValueFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </label>
  );
};
