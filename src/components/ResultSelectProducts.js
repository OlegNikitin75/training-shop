import React from 'react';

const ResultSelectProducts = ({objFiltersValues, productFilter, productsItems}) => {
  return (
    <div>
      {
        (objFiltersValues.color.length > 0
          || objFiltersValues.size.length > 0
          || objFiltersValues.brand.length > 0
          || objFiltersValues.price.length > 0)
        &&
        <div className="filter__result">
          <span><strong>{productFilter.length === productsItems ? 0 : productFilter.length}</strong></span>
          <span><strong>Items Found</strong></span>

          {
            objFiltersValues.color.length > 0 &&
            objFiltersValues.color.map((item, index) =>
              <span key={`color-res${index}`}
              >COLOR: {item}</span>
            )
          }
          {
            objFiltersValues.size.length > 0 &&
            objFiltersValues.size.map((item, index) =>
              <span key={`size-res${index}`}
              >SIZE: {item}</span>
            )
          }
          {
            objFiltersValues.brand.length > 0 &&
            objFiltersValues.brand.map((item, index) =>
              <span key={`brand-res${index}`}
              >BRAND: {item}</span>
            )
          }
          {
            objFiltersValues.price.length > 0 &&
            objFiltersValues.price.map((item, index) =>
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
  );
};

export default ResultSelectProducts;
