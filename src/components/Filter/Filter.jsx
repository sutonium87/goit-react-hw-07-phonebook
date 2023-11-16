// Import necessary dependencies and styles
import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

// Import Redux actions, hooks, and selectors
import { filterContacts } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

// Define the Filter functional component
export default function Filter() {
  // Redux setup: select filter and dispatch function from the store
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // Handle filter input change and dispatch the filterContacts action
  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  // JSX structure for the Filter component
  return (
    <div className={style.filterWrapper}>
      {/* Label and input for filtering contacts by name */}
      <label className={style.filterLabel}>Find contacts by name</label>
      <input
        className={style.filterInput}
        type="text"
        name="filter"
        placeholder="Enter contact to search"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}

// Prop types for the Filter component
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
