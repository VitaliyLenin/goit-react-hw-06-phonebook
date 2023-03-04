import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'Redux/Filter/filter-selectors';
import { setFilter } from 'Redux/Filter/filter-slice';

import css from './MyContactsFilter.module.css';

const MyContactsFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={css.filter_wrap}>
      <label>Find contacts by name</label>
      <input
        className={css.input}
        onChange={handleFilter}
        name="filter"
        type="text"
        value={filter}
      />
    </div>
  );
};

export default MyContactsFilter;
