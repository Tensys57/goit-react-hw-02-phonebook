import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      className={css.filterInput}
      value={value}
      onChange={onChange}
    />
  </label>
);
