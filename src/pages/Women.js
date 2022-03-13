import React from 'react';
import Goods from "../components/goods/Goods";
import CategoriesHeader from "../components/categories-header/CategoriesHeader";
import CategoriesBottom from "../components/categories-bottom/CategoriesBottom";
import Filters from "../components/filters-section/Filters";

const Women = ({
                 productsItems,
                 products,
                 productType,
                 addResultData,
                 func,
                 filter,
                 click,
  productFilter,
                 setProductFilter

               }) => {


  return (
    <div
      className="container"
      data-test-id={`products-page-${productType}`}
    >
      <CategoriesHeader
        title="Women"
        func={func}
        id="women-btn"
        click={click}

      />
      {
        <Filters
          productType={productType}
          filter={filter}
          products={productsItems}
          addResultData={addResultData}
          setProductFilter={setProductFilter}
          productFilter={productFilter}
        />
      }

      <Goods
        products={products}
        currentType={true}
        productType={productType}

      />
      <CategoriesBottom/>
    </div>

  );
};

export default Women;
