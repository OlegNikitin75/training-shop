import React, {useState} from 'react';
import {FreeMode, Navigation, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Button from "../button/Button";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Sliders.css";
import Card from "../card/Card";
import slide1 from "../../img/hero-img/slide1.jpg";

export const HeroSlider = () => {
  return (
    <Swiper data-test-id="main-slider"
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={1}

    >
      <SwiperSlide>
        <img src={slide1} alt="slide1"/>
        <Button
          buttonStyle="btn-fill"
          buttonSize="btn-large"
          link="/"
        >
          <span className="btn-title">Banner</span>
          <span className="btn-subtitle">your Title text</span>
        </Button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="slide1"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="slide2"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="slide3"/>
      </SwiperSlide>


    </Swiper>
  );

};
export const ProductSlider = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>

  <div className="swiper__container">
    <div className="product-preview__buttons">
      <button className="product-preview__button btn-up"/>
      <button className="product-preview__button btn-down"/>
    </div>
    <Swiper
      onSwiper={setThumbsSwiper}
      freeMode={true}
      direction={"vertical"}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      navigation={{
        nextEl: '.btn-up',
        prevEl: '.btn-down'
      }}
      spaceBetween={30}
      slidesPerView={4}

    >
      {
        images.map((img, index) =>
          <SwiperSlide key={`preview-slide-${index}`}
          >
            <img
              className="product-preview__slide"
              src={`https://training.cleverland.by/shop${img.url}`}
              alt="product-preview"/>
          </SwiperSlide>
        )
      }
    </Swiper>
  </div>
      <Swiper  data-test-id="product-slider"
        navigation
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Thumbs]}

      >
        {
          images.map((img, index) =>
            <SwiperSlide key={`preview-slide-${index}`}
            >
              <img
                className="product-preview__slide"
                src={`https://training.cleverland.by/shop${img.url}`}
                alt="product-preview"/>
            </SwiperSlide>
          )
        }
      </Swiper>
    </>
  );
};



export const RelatedSlider = ({products,productType,resetSelect}) => {
  return (
    <>
      <div className="related__head">
        <h3 className="related__title">RELATED PRODUCTS</h3>
        <div className="related__buttons">
          <button className="related__btn related__btn-prev"/>
          <button className="related__btn related__btn-next"/>
        </div>
      </div>
      <Swiper  data-test-id="related-slider"
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: '.related__btn-next',
          prevEl: '.related__btn-prev'
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          530: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1100: {
            slidesPerView: 4
          },
          1440: {
            slidesPerView: 4
          }
        }}
      >
        {
          products.map((card,index)=>(
            <SwiperSlide key={`card-related${index}`}
                         onClick={resetSelect}
            >
              <Card
                currentType={true}
                products={card}
                productType={productType}
                id={card.id}
              />
            </SwiperSlide>

          ))
        }
      </Swiper>
    </>
  );
};
