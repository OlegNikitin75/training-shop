import React from 'react';
import './Filters.css';
import FilterItem from "../filter-item/FilterItem";


const Filters = ({products, changeFilter, filter, productType}) => {
  const arrSizes = []
  const colorSet = new Set();
  const brandSet = new Set();

  products.forEach(item => {
    item.images.forEach(img => {
      colorSet.add(img.color);
    })
    item.sizes.forEach(size => {
      arrSizes.push(size);
    })
    brandSet.add(item.brand);
  })
  const sizeSet = new Set(arrSizes);

  const colors = Array.from(colorSet).sort();
  const sizes = Array.from(sizeSet);
  const brands = Array.from(brandSet).sort();

  return (
    <div className={filter
      ? "filters__wrapper--active"
      : "filters__wrapper"
    }
         data-test-id={`filters-${productType}`}>
      <div className="filters">
        <h5 className="filters__title">
          Color
        </h5>
        <ul className="filters__list  filters__color"
            data-test-id="filters-color">
          {
            colors.map((item, index) =>
              <FilterItem
                key={`color${index}`}
                styleCheckbox="filter__input-all"
                styleChecked="filter__input-all-checked"
                label={item}
                value={item}
                changeFilter={changeFilter}
                currentFilter="color"
              />
            )
          }
        </ul>
      </div>
      <div className="filters">
        <h5 className="filters__title">
          size
        </h5>
        <ul className="filters__list"
            data-test-id="filters-size">
          {
            sizes.map((item, index) =>
              <FilterItem
                key={`size${index}`}
                styleChecked="filter__input-all-checked"
                label={item}
                value={item}
                changeFilter={changeFilter}
                currentFilter="size"
              />
            )
          }
        </ul>
      </div>
      <div className="filters">
        <h5 className="filters__title">
          brand
        </h5>
        <ul className="filters__list"
            data-test-id="filters-brand">
          {
            brands.map((item, index) =>
              <FilterItem
                key={`brand${index}`}
                styleCheckbox="filter__input-all"
                styleChecked="filter__input-all-checked"
                label={item}
                value={item}
                changeFilter={changeFilter}
                currentFilter="brand"
              />
            )
          }
        </ul>
      </div>
      <div className="filters">
        <h5 className="filters__title">
          price
        </h5>
        <ul className="filters__list">
          <FilterItem
            styleCheckbox="filter__input-all"
            styleChecked="filter__input-all-checked"
            value="0"
            label="$0-$50"
            changeFilter={changeFilter}
            currentFilter="price"
          />
          <FilterItem
            styleCheckbox="filter__input-all"
            styleChecked="filter__input-all-checked"
            value="50"
            label="$50-$100"
            changeFilter={changeFilter}
            currentFilter="price"
          />
          <FilterItem
            styleCheckbox="filter__input-all"
            styleChecked="filter__input-all-checked"
            value="100"
            label="$100-$150"
            changeFilter={changeFilter}
            currentFilter="price"
          />
          <FilterItem
            styleCheckbox="filter__input-all"
            styleChecked="filter__input-all-checked"
            value="150"
            label="$150-$200"
            changeFilter={changeFilter}
            currentFilter="price"
          />
          <FilterItem
            styleCheckbox="filter__input-all"
            styleChecked="filter__input-all-checked"
            value="200"
            label="$200+"
            changeFilter={changeFilter}
            currentFilter="price"
          />
        </ul>
      </div>
    </div>
  );
};

export default Filters;
