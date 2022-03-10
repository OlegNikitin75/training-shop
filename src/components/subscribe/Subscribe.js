import React from 'react';
import './Subscribe.css';


const Subscribe = () => {
  return (
    <div className="subscribe__wrapper">
      <div className="container">


      <div className="subscribe__inner">
        <div className="subscribe__content">
          <p className="subscribe__label">Special Offer</p>
          <p className="subscribe__desc">Subscribe <br/>And <span>Get 10% Off</span></p>
        </div>
        <form action="" className="subscribe__form">
          <input type="email" className="subscribe__input" placeholder="Enter your email"/>
          <button className="form-btn subscribe__btn">Subscribe</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Subscribe;
