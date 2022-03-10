import React from 'react';
import GoodsSection from '../components/goods-section/GoodsSection';
import HeroSection from "../components/hero/HeroSection";
import Preview from "../components/preview/Preview";
import Subscribe from "../components/subscribe/Subscribe";
import Blogs from "../components/blogs/Blogs";


const Main = ({products,data,getPath}) => {
  return (
    <div>
      <HeroSection />
      <GoodsSection
        title={"Women's"}
        products={products.women}
        link="/women"
        productType="women"
        getPath={getPath}
      />
      <GoodsSection
        title={"Men's"}
        products={products.men}
        link="/men"
        productType="men"
        getPath={getPath}
      />
      <Preview/>
      <Subscribe />
      <Blogs
        data={data.blogs}
      />

    </div>
  );
};

export default Main;
