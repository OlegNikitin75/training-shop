import React from 'react';
import './ProductSection.css';
import {ProductSlider} from "../sliders/Sliders";




const ProductPreview = ({images}) => {

  return (
    <div className="product-preview__wrapper">
      <ProductSlider images={images}/>
    </div>
  );
};

export default ProductPreview;
