import React from 'react';
import './Blog.css';
import {Link} from "react-router-dom";

const Blog = ({data,img}) => {
  return (
    <article className="blogs__item">
      <img src={img} alt="blog"/>
      <div className="blogs__item-content">
        <h5 className="blogs__item-title">{data.title}</h5>
        <p className="blogs__item-desc">{data.desc}</p>
        <Link className="blogs__item-link" to="/">
          Read more
        </Link>
      </div>
    </article>
  );
};

export default Blog;
