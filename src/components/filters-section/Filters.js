import React, {useEffect, useState} from 'react';
import './Filters.css';
import FilterItem from "../filter-item/FilterItem";
import {PRODUCTS} from "../../product";

const Filters = ({products, filter, productType, setProductFilter, productFilter}) => {

  const [colorFilter, setColorFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  useEffect(() => {
    setProductFilter(PRODUCTS[productType].filter(product =>
      (colorFilter.length > 0
        ? (product.images.filter(item => colorFilter.some(elem => elem === item.color)).length)
        : product)
      &&
      (sizeFilter.length > 0
        ? (product.sizes.filter(item => sizeFilter.some(elem => elem === item)).length)
        : product)
      &&
      (brandFilter.length > 0
        ? (brandFilter.some(elem => elem === product.brand))
        : product)
      &&
      (priceFilter.length > 0
        ? (priceFilter.some(elem => (product.price >= elem && product.price <= +elem + 50)))
        : product)
    ))
  }, [colorFilter, sizeFilter, brandFilter, priceFilter, setProductFilter, productType]);

  const changeFilter = (value, currentFilter) => {
    if (currentFilter === 'color') {
      if (colorFilter.includes(value)) {
        setColorFilter([...colorFilter.filter(item => item !== value)]);
      } else {
        setColorFilter([...colorFilter, value]);
      }
    }
    if (currentFilter === 'size') {
      if (sizeFilter.includes(value)) {
        setSizeFilter([...sizeFilter.filter(item => item !== value)]);
      } else {
        setSizeFilter([...sizeFilter, value]);
      }
    }
    if (currentFilter === 'brand') {
      if (brandFilter.includes(value)) {
        setBrandFilter([...brandFilter.filter(item => item !== value)]);
      } else {
        setBrandFilter([...brandFilter, value]);
      }
    }
    if (currentFilter === 'price') {
      if (priceFilter.includes(value)) {
        setPriceFilter([...priceFilter.filter(item => item !== value)]);
      } else {
        setPriceFilter([...priceFilter, value]);
      }
    }
  }

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
    <>
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
      <div>
        {

          <div className={filter ? "filter__result--active" : "filter__result"}>
            <span>
              <strong>{productFilter.length === products.length ? 0 : productFilter.length}</strong>
            </span>
            <span>
              <strong>Items Found</strong>
            </span>

            {
              colorFilter.length > 0 &&
              colorFilter.map((item, index) =>
                <span key={`color-res${index}`}
                >COLOR: {item}</span>
              )
            }
            {
              sizeFilter.length > 0 &&
              sizeFilter.map((item, index) =>
                <span key={`size-res${index}`}
                >SIZE: {item}</span>
              )
            }
            {
              brandFilter.length > 0 &&
              brandFilter.map((item, index) =>
                <span key={`brand-res${index}`}
                >BRAND: {item}</span>
              )
            }
            {
              priceFilter.length > 0 &&
              priceFilter.map((item, index) =>
                  <span key={`brand-res${index}`}
                  >PRICE: {item < 200
                    ? `$${item} - $${+item + 50}`
                    : `$${item}+`}
              </span>
              )
            }
          </div>
        }
      </div>
    </>
  );
};

export default Filters;
