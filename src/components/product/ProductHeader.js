import React from 'react';
import {Link} from "react-router-dom";
import CardRating from "../rating/CardRating";
import './ProductHeader.css';
const ProductHeader = ({productType,dataProductItem}) => {
  return (
    <div className="product-header">
      <div className="container">
        <div className="product-header__inner">
          <div className="product-header__item">
            <div className="crumbs">
              <Link className="crumbs__link" to="/">Home</Link>
              <span className="crumbs__arrow"/>
              <Link className="crumbs__link" to={`/${productType}`}>{`${productType[0].toUpperCase()}${productType.slice(1)}`}</Link>
              <span className="crumbs__arrow"/>
              <span className="crumbs__link crumbs__link--active">{dataProductItem.name}</span>
            </div>
            <div className="product-header__reviews">
              <CardRating ratingItem={dataProductItem.rating}/>
              <span className="product-header__desc">{dataProductItem.reviews} Reviews</span>
            </div>

          </div>
          <h3 className="product-header__title">{dataProductItem.name}</h3>
          <div className="product-header__item">
            <button className="categories__share">Share</button>
            <div className="product-header__article">
              <div className="product-header__article-item">
                <span>SKU:</span>
                <span>777</span>
              </div>
              <div className="product-header__article-item">
                <span >Availability:</span>
                <span>In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
