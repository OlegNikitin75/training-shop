import React, {useState} from 'react';
import ProductHeader from "../components/product/ProductHeader";
import ProductSection from "../components/product/ProductSection";
import ProductRelated from "../components/product/ProductRelated";
import {useParams} from "react-router-dom";

const Product = ({products}) => {


  const params = useParams();
  const productType = params.category;
  const id = params.id;
  const dataProductItem = {};

  for (let item in products) {
    for (let elem of products[item]) {
      if (elem.id === id) {
        dataProductItem.images = elem.images;
        dataProductItem.name = elem.name;
        dataProductItem.rating = elem.rating;
        dataProductItem.reviews = elem.reviews.length;
        dataProductItem.price = elem.price;
        dataProductItem.rewiewsAll = elem.reviews;
        dataProductItem.sizes = elem.sizes;

        let stackColor = [elem.images[0].color];
        let stackUrl = [elem.images[0].url];

        const resultColors = [];
        elem.images.forEach((item, index) => {
          if (elem.images[index].color !== stackColor[0]) {

            resultColors.push(
              {
                color: stackColor.pop(),
                url: stackUrl.pop(),
              }
            );
            stackColor[0] = elem.images[index].color;
            stackUrl[0] = elem.images[index].url;
          }
        })
        if (elem.images[elem.images.length - 1] !== stackColor) {
          resultColors.push(
            {
              color: stackColor.pop(),
              url: stackUrl.pop(),
            }
          );
        }
        dataProductItem.selectImages = resultColors;
        dataProductItem.material = elem.material;

      }
    }
  }


  const [colors, setColors] = useState(1);
  const [sizes, setSizes] = useState(1);
  const [sizeLabel, setSizeLabel] = useState(dataProductItem.sizes[0]);
  const [colorLabel, setColorLabel] = useState(dataProductItem.selectImages[0].color);

  const objSelectData = {
    color:colors,
    size:sizes,
    sLabel:sizeLabel,
    cLabel:colorLabel,
  }


  const addActiveColor = (index, currentColorLabel) => {
    setColors(index)
    setColorLabel(currentColorLabel);
  };

  const addActiveSize = (index, currentSizeLabel) => {
    setSizes(index);
    setSizeLabel(currentSizeLabel);
  }


  const resetSelect = () => {
    setColors(1);
    setSizes(1);
  }


  return (
    <div
      className="page-product"
      data-test-id={`product-page-${productType}`}
    >
      <ProductHeader
        dataProductItem={dataProductItem}
        productType={productType}/>
      <ProductSection
        dataProductItem={dataProductItem}
        addActiveSize={addActiveSize}
        addActiveColor={addActiveColor}
        objSelectData={objSelectData}
      />
      <ProductRelated
        products={products}
        productType={productType}
        filter='isNewArrivals'

        resetSelect={resetSelect}
      />
    </div>
  );
};

export default Product;
