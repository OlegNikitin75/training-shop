import React from 'react';
import './HeroFooter.css'

const HeroFooter = () => {
  return (
    <div className="hero__footer">
      <div className="hero__footer-item hero__footer-item--shipping">
        <h5 className="hero__footer-title">FREE SHIPPING</h5>
        <p className="hero__footer-desc">On all UA order or order above $100</p>
      </div>
      <div className="hero__footer-item hero__footer-item--return">
        <h5 className="hero__footer-title">30 DAYS RETURN</h5>
        <p className="hero__footer-desc">Simply return it within 30 days for an exchange</p>
      </div>
      <div className="hero__footer-item hero__footer-item--support">
        <h5 className="hero__footer-title">SUPPORT 24/7</h5>
        <p className="hero__footer-desc">Contact us 24 hours a day, 7 days a week</p>
      </div>


    </div>
  );
};

export default HeroFooter;
