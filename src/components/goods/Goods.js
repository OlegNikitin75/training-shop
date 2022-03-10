import React from 'react';
import './Goods.css';
import Card from "../card/Card";

const Goods = ({products,productType,filter,currentType}) => {
  return (
    <div className="goods">
      {
        products.map((item,index)=>
          <Card
            key={`card${index}`}
            products={item}
            id={item.id}
            productType={productType}
            filter={filter}
            currentType={currentType}
          />
        )
      }
    </div>
  );
};

export default Goods;
