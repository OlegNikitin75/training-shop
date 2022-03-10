import React from 'react';
import {Link} from "react-router-dom";
import CardRating from "../rating/CardRating";
import './ProductSelect.css';

import icon1 from '../../img/product-img/checkout-icon/icon1.png';
import icon2 from '../../img/product-img/checkout-icon/icon2.png';
import icon3 from '../../img/product-img/checkout-icon/icon3.png';
import icon4 from '../../img/product-img/checkout-icon/icon4.png';
import icon5 from '../../img/product-img/checkout-icon/icon5.png';
import icon6 from '../../img/product-img/checkout-icon/icon6.png';
import icon7 from '../../img/product-img/checkout-icon/icon7.png';

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7]


const ProductSelect = ({dataProductItem,addActiveColor,addActiveSize,objSelectData}) => {

  return (
    <div className="product-select__wrapper">
      <div className="product-select__item item__color">
        <div className="product-select__head">
          <span className="product-select__label">Color: </span>
          <span className="product-select__value">{objSelectData.cLabel}</span>
        </div>
        <div className="product-select__list list__color">
          {
            dataProductItem.selectImages.map((elem, index) => (
              <span
                key={`color-${index}`}
                className={(objSelectData.color === index + 1)
                  ? "product-select__elem product-active"
                  : "product-select__elem"}
                onClick={() => addActiveColor(index + 1, elem.color)}
              >
            <img src={`https://training.cleverland.by/shop${elem.url}`}
                 alt="product"/>
          </span>
            ))
          }

        </div>
      </div>
      <div className="product-select__item item__size">
        <div className="product-select__head">
          <span className="product-select__label">Size: </span>
          <span className="product-select__value">{objSelectData.sLabel}</span>
        </div>
        <div className="product-select__list list__size">
          {
            dataProductItem.sizes.map((size, index) =>
                <span key={`size-${index}`}
                      className={(objSelectData.size === index + 1)
                        ? "product-select__elem product-active"
                        : "product-select__elem"}
                      onClick={() => addActiveSize(index + 1, size)}>
            {size}
          </span>
            )
          }
        </div>
        <button className="product-select__btn">Size guide</button>
      </div>
      <div className="product-select__item item__card">

        <div className="product-select__list list__card">
          <span className="product-select__elem elem__price">
            $ {dataProductItem.price}
          </span>
          <button className="product-select__button">
            add to card
          </button>
          <Link to="/" className="product-select__link elem__favorites"/>
          <Link to="/" className="product-select__link elem__compare"/>
        </div>
      </div>
      <div className="product-select__item item__info">

        <div className="product-select__list list__info">
          <span className="list__info-elem elem__shipping">
            Shipping & Delivery
          </span>
          <span className="list__info-elem elem__return">
            Returns & Exchanges
          </span>
          <span className="list__info-elem elem__questions">
            Ask a questions
          </span>

        </div>
        <div className="product-select__checkout">
          <div className="product-select__checkout-head">
            <h5 className="product-select__checkout-title">
              guaranteed safe checkout
            </h5>
            <div className="product-select__checkout-line"/>
          </div>

          <div className="product-select__checkout-list">
            {
              icons.map((icon, index) =>
                <Link to="/"
                      key={`brand${index}`}>
                  <img
                    src={icon}
                    alt={`icon${index}`}
                  />
                </Link>
              )
            }
          </div>
        </div>
      </div>
      <div className="product-select__item item__desc">
        <div className="product-select__head">
          <span className="product-select__label">DESCRIPTION</span>
        </div>
      </div>
      <div className="product-select__item item__information">
        <div className="product-select__head">
          <span className="product-select__label">ADDITIONAL INFORMATION</span>
        </div>
        <div className="product-select__list list__information">
          <div className="product-select__list-item">

            <span>Color: </span>
            {
              dataProductItem.selectImages.map((item, index) => (
                <span key={`span-color${index}`}
                      className="product-select__additional"
                >
                  {item.color}
                  <span className="product-select__additional-separator">, </span>
                </span>
              ))
            }
          </div>

          <div className="product-select__list-item">
            <span>Sizes: </span>
            {
              dataProductItem.sizes.map((item, index) => (
                <span key={`span-size${index}`}
                      className="product-select__additional"
                >
                  {item}
                  <span className="product-select__additional-separator">, </span>
                </span>
              ))
            }
          </div>


          <div className="product-select__list-item">
            <span>Material: </span>
            <span>{dataProductItem.material}</span>
          </div>


        </div>
      </div>
      <div className="product-select__item item__review">
        <div className="product-select__head">
          <span className="product-select__label">review</span>
        </div>
        <div className="product-select__review">
          <div className="product-select__rating-inner">
            <form action="" className="form__rating">
              <div className="rating">
                <div className="rating__items">
                  <input id="star_5" className="rating__item" type="radio" value="5" name="star"/>
                  <label htmlFor="star_5" className="rating__label"/>
                  <input id="star_4" className="rating__item" type="radio" value="4" name="star"/>
                  <label htmlFor="star_4" className="rating__label"/>
                  <input id="star_3" className="rating__item" type="radio" value="3" name="star"/>
                  <label htmlFor="star_3" className="rating__label"/>
                  <input id="star_2" className="rating__item" type="radio" value="2" name="star"/>
                  <label htmlFor="star_2" className="rating__label"/>
                  <input id="star_1" className="rating__item" type="radio" value="1" name="star"/>
                  <label htmlFor="star_1" className="rating__label"/>
                </div>
              </div>
            </form>
            <span className="product-select__rating-review">{dataProductItem.reviews} Reviews</span>
          </div>
          <button className="product-select__rating-btn">Write a review</button>
        </div>
        <div className="product-select__list list__review">
          {
            dataProductItem.rewiewsAll.map((review, index) =>
              <div key={`review-${index}`}
                   className="list__review-item">
                <div className="list__review-head">
                  <h6 className="list__review-name">{review.name}</h6>
                  <div className="list__review-rating">
                    <span className="list__review-date">3 months ago</span>
                    <CardRating ratingItem={review.rating}/>
                  </div>

                </div>
                <p className="list__review-text">
                  {review.text}
                </p>

              </div>
            )
          }


        </div>
      </div>
    </div>
  );
};

export default ProductSelect;
