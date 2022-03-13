import React from 'react';
import './FilterItem.css';

const FilterItem = ({label, color, value, changeFilter, currentFilter}) => {

  return (
    <li className="filter__item">
      <label className="filter__label">
        <input onChange={() => {
          changeFilter(value, currentFilter);
        }}
               type="checkbox"
               className="input"
               name="filter"
               value={value}
               data-test-id={`filter-${currentFilter}-${value}`}
        />

        <div className="filter__input filter__input-all"
             style={{backgroundColor: color}}>
          <span className="filter__input-all-checked"
                style={{border: `2px solid ${color}`}}/>
        </div>
        {label}
      </label>
    </li>
  );
};

export default FilterItem;
