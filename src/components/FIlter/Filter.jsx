import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label className={s.filterLabel}>
        Find contacts by name{' '}
        <input
          className={s.filterInput}
          type="text"
          value={filter}
          onChange={onChange}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
