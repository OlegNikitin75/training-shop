import React, {useEffect} from 'react';
import Goods from "../components/goods/Goods";
import CategoriesHeader from "../components/categories-header/CategoriesHeader";
import CategoriesBottom from "../components/categories-bottom/CategoriesBottom";
import Filters from "../components/filters-section/Filters";
import ResultSelectProducts from "../components/ResultSelectProducts";

const Men = ({
               productsItems,
               products,
               productType,
               objFiltersValues,
               addResultData,
               func,
               filter,
               click,
               changeFilter,
               filterItems,
               productFilter,
             }) => {

  useEffect(() => {
    for (const item in objFiltersValues) {
      objFiltersValues[item].length = 0

    }
  }, []);
  useEffect(() => {
    filterItems(productType);
  }, [objFiltersValues.color, objFiltersValues.size, objFiltersValues.brand, objFiltersValues.price]);

  return (
    <div
      className="container"
      data-test-id={`products-page-${productType}`}
    >
      <CategoriesHeader
        title="Men"
        func={func}
        id="men-btn"
        click={click}
      />
      {
        <Filters
          productType={productType}
          filter={filter}
          products={productsItems}
          changeFilter={changeFilter}
          addResultData={addResultData}
        />
      }
      <ResultSelectProducts
        objFiltersValues={objFiltersValues}
        productFilter={productFilter}
        productsItems={productsItems}
      />
      <Goods
        products={products}
        currentType={true}
        productType={productType}
      />
      <CategoriesBottom/>
    </div>
  );
};

export default Men;
