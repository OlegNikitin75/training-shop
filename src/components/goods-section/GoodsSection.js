import React, {useState} from 'react';
import './GoodsSection.css';
import Goods from "../goods/Goods";
import {Link} from "react-router-dom";

const buttons = [
  {
  name:'NEW ARRIVALS',
  filter:'isNewArrivals'
},
  {
    name:'SPECIALS',
    filter:'isSpecial'
  },
  {
    name:'BESTSELLERS',
    filter:'isBestseller'
  },
  {
    name:'MOST VIEWED',
    filter:'isMostViewed'
  },
  {
    name:'FEATURED PRODUCTS',
    filter:'isFeatured'
  }

  ];

const GoodsSection = ({products, title, link, productType, getPath}) => {

  const [tabs, setTabs] = useState(0);

  const [currentFilter, setCurrentFilter] = useState('isNewArrivals');

  const addActiveClass = (index) => {
    if (Number(index) === tabs) {
      return true;
    }
  }
  return (
    <div className="section__wrapper" data-test-id={`clothes-${productType}`}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">{title}</h2>
          <div className="section__buttons">
            {
              buttons.map((button, index) =>
                <button key={`button${index}`}
                        data-test-id={`clothes-${productType}-${button.filter}`}
                        className={addActiveClass(index + '')
                          ? "section__btn--active"
                          : "section__btn"}
                        id={index + ''}
                        onClick={() => {
                          setTabs(index);
                          setCurrentFilter(button.filter);
                        }}>
                  {button.name}
                </button>)
            }
          </div>
        </div>
        <Goods
          filter={currentFilter}
          products={products}
          productType={productType}
          getPath={getPath}
        />
        <Link to={link}>
          <div className="section__button">
            <button>See All</button>
          </div>

        </Link>
      </div>
    </div>
  );
};

export default GoodsSection;
