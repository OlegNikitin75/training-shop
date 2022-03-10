import React from 'react';
import './CategoriesHeader.css';
import {Link} from "react-router-dom";

const CategoriesHeader = ({title, id, func, click}) => {


  return (
    <div className="categories__wrapper">

      <div className="categories__header">
        <div className="container">
          <div className="categories__head">
            <div className="crumbs">
              <Link to="/" className="crumbs__link">Home</Link>
              <span className="crumbs__arrow"/>
              <span className="crumbs__link crumbs__link--active">{title}</span>
            </div>
            <button className="categories__share">Share</button>
          </div>
          <h3 className="categories__title">{title}</h3>
        </div>

      </div>
      <div className="categories__filters">
        <div className="categories__filters-item__head">
          <button onClick={
            () => {
              func(id)
            }
          }
                  id={id}
                  data-test-id="filter-button"
                  className={click
                    ? "categories__filters-btn categories__filters-btn--on"
                    : "categories__filters-btn categories__filters-btn--off"}>
            Filter
          < /button>
          <div className="categories__filters-item">
            <button className="categories__filters-button categories__filters-btn--list"/>
            <button className="categories__filters-button categories__filters-btn--grid"/>
          </div>
        </div>
        <div className="categories__filters-list">
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
