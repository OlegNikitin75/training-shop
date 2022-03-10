import React from 'react';
import './Footer.css';
import Social from "../social/Social";
import {Link} from "react-router-dom";



const Footer = ({data}) => {
  return (<footer className="footer" data-test-id="footer">
    <div className="footer__top">
      <div className="footer__top-inner">
        <form action="" className="footer__form">
          <label htmlFor="" className="footer__label">BE IN TOUCH WITH US:</label>
          <input type="text" className="footer__input" placeholder="Enter your email"/>
          <button className="footer__btn" type="submit">Join Us</button>
        </form>
        <Social/>
      </div>

    </div>
    <div className="footer__body">
      <div className="footer-section">
        <h3 className="footer__title">
          Categories
        </h3>
        <ul className="footer__list">
          {
            data.categories.map((item,index)=>
              <li
                key={`categories${index}`}
                className="footer__item">
                <Link
                  to={`/${item.path}`}
                  data-test-id = {`footer-nav-link-${item.path}`}>{item.name}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer__title">
          Information
        </h3>
        <ul className="footer__list">
          {
            data.information.map((item,index)=>
              <li
                key={`information${index}`}
                className="footer__item">
                <Link
                  to={`/${item.path}`}
                  data-test-id = {`footer-nav-link-${item.path}`}>{item.name}
                </Link>
              </li>
            )
          }

        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer__title">
          Useful links
        </h3>
        <ul className="footer__list">
          {
            data.links.map((item,index)=>
              <li
                key={`link${index}`}
                className="footer__item">
                <Link
                  to={`/${item.path}`}
                  data-test-id = {`footer-nav-link-${item.path}`}>{item.name}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer__title">
          CONTACT US
        </h3>
        <ul className="footer__list">
          <li className="footer__item footer__item--location">
              <span>
              Belarus, Gomel, Lange 17
            </span>
          </li>
          <li className="footer__item footer__item--phone">
            <a href="tel:+375 29 100 20 30">+375 29 100 20 30
            </a>
          </li>
          <li className="footer__item footer__item--time">
              <span>
               All week 24/7
            </span>
          </li>
          <li className="footer__item footer__item--mail">
            <a href="mailto:info@clevertec.ru">info@clevertec.ru
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__bottom-inner">
        <p className="footer__copy">Copyright © 2032 all rights reserved</p>
        <div className="footer__labels">
          {
            data.labels.map((label, index) =>
              <Link key={`label${index}`}
                    to={label.path}
              >
                <img src={label.img} alt="icon"/>
              </Link>
            )
          }
        </div>
        <Link className="footer__clevertec" to="/">Clevertec.ru/training</Link>
      </div>
    </div>
  </footer>);
};

export default Footer;
