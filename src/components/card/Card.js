import React from 'react';
import {Link} from "react-router-dom";
import './Card.css';
import CardRating from "../rating/CardRating";

const Card = ({products, productType, id, filter, currentType}) => {
  let currentFilter= products.particulars[filter];

  return (
    <>
      {currentFilter && <Link
        to={`/product/${products.category}/${id}`}
        data-test-id={`clothes-card-${productType}`}
      >
        <article className="cards">
          {
            products.discount ? <div className="card__discount">{products.discount}</div> : ''
          }
          <img className="cards__img" src={`https://training.cleverland.by/shop${products.images[0]?.url}`}
               alt="goods"/>
          <h6 className="cards__title">{products.name}</h6>
          <div className="card__bottom">
            <strong className="card__price">$ {products.price}</strong>
            <CardRating ratingItem={products.rating}/>
          </div>
        </article>
      </Link>}
      {currentType && <Link
        to={`/product/${products.category}/${id}`}
        data-test-id={`clothes-card-${productType}`}
      >
        <article className="cards">
          {
            products.discount ? <div className="card__discount">{products.discount}</div> : ''
          }
          <img className="cards__img" src={`https://training.cleverland.by/shop${products.images[0]?.url}`}
               alt="goods"/>
          <h6 className="cards__title">{products.name}</h6>
          <div className="card__bottom">
            <strong className="card__price">$ {products.price}</strong>
            <CardRating ratingItem={products.rating}/>
          </div>
        </article>
      </Link>}

    </>


  );
};

export default Card;
