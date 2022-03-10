import React from 'react';
import './ProductRelated.css';
import {RelatedSlider} from "../sliders/Sliders";

const ProductRelated = ({products, productType,resetSelect}) => {
  return (
    <div className="container">
      <div className="related__wrapper">
        <RelatedSlider
          products={products[productType]}
          productType={productType}

          resetSelect={resetSelect}
        />
      </div>
    </div>
  );
};

export default ProductRelated;
