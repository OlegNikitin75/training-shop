import React from 'react';
import ProductPreview from "./ProductPreview";
import ProductSelect from "./ProductSelect";

const ProductSection = ({dataProductItem,addActiveColor,addActiveSize,objSelectData}) => {
  return (
    <div className="container">
      <div className="product__wrapper">
        <ProductPreview
          images={dataProductItem.images}
         />
        <ProductSelect
          dataProductItem={dataProductItem}
          addActiveColor={addActiveColor}
          addActiveSize={addActiveSize}
          objSelectData={objSelectData}
        />
      </div>
    </div>
  );
};

export default ProductSection;
