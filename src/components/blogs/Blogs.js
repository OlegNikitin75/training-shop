import React from 'react';
import Blog from "../blog/Blog";
import './Blogs.css';
import blogs1Img from "../../img/other-img/blogs1-img.jpg";
import blogs2Img from "../../img/other-img/blogs2-img.jpg";
import blogs3Img from "../../img/other-img/blogs3-img.jpg";
const blogsImages = [blogs1Img,blogs2Img,blogs3Img];


const Blogs = ({data}) => {
  return (
    <div className="blogs__wrapper">
      <div className="container">
        <div className="blogs__inner">
          <div className="blogs__head">
            <h3 className="blogs__title">LATEST FROM BLOG</h3>
            <button className="blogs__btn">SEE ALL</button>

          </div>
          <div className="blogs__list">
            {
              data.map((blog, index) =>
                <Blog
                  key={`blog${index}`}
                  data={data[index]}
                  img={blogsImages[index]}
                />
              )
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Blogs;
