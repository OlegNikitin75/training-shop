import React from 'react';
import {Link} from "react-router-dom";
import './Social.css';
import facebook from '../../img/icons/facebook.svg'
import twitter from '../../img/icons/twitter.svg'
import instagram from '../../img/icons/instagram.svg'
import pinterest from '../../img/icons/pinterest.svg'


const Social = () => {
  return (
    <ul className="social__list">
      <Link to="/" className="social__link">
        <li className="social__item">
          <img src={facebook} alt="icon-social"/>
        </li>
      </Link>
      <Link to="/" className="social__link">
        <li className="social__item">
          <img src={twitter} alt="icon-social"/>
        </li>
      </Link>
      <Link to="/" className="social__link">
        <li className="social__item">
          <img src={instagram} alt="icon-social"/>
        </li>
      </Link>
      <Link to="/" className="social__link">
        <li className="social__item">
          <img src={pinterest} alt="icon-social"/>
        </li>
      </Link>

    </ul>
  );
};

export default Social;
