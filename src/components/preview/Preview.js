import React from 'react';
import './Preview.css';
import Button from "../button/Button";

import item1img from '../../img/other-img/img1.jpg';
import item2img from '../../img/other-img/img2.jpg';

const Preview = () => {
  return (

<div className="preview__wrapper">
  <div className="container">
    <div className="preview__inner">
      <div className="preview__item">
        <img src={item1img} alt="collection"/>
        <Button
          className="preview__btn"
          buttonStyle="btn-fill"
          buttonSize="btn-large"
          link={"/"}>
          <span className="btn-title">New Season</span>
          <span className="btn-subtitle">lookbook collection</span>
        </Button>
      </div>
      <div className="preview__item">
        <img src={item2img} alt="sale"/>
        <Button
          className="preview__btn"
          buttonStyle="btn-fill"
          buttonSize="btn-large"
          link={"/"}>
          <span className="btn-title">sale</span>
          <span className="btn-subtitle">Get UP to <span>50% off</span></span>
        </Button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Preview;
