import React from 'react';
import HeroFooter from "./HeroFooter";
import './HeroSection.css';
import Button from "../button/Button";
import womenImg from '../../img/hero-img/women.jpg';
import menImg from '../../img/hero-img/men.jpg';
import accessoriesImg from '../../img/hero-img/accessories.jpg'
import {HeroSlider} from "../sliders/Sliders";

const HeroSection = () => {

  return (<div className="hero__wrapper">
    <div className="container">
      <div className="hero__inner">
        <HeroSlider  />
        <div className="hero__content">
          <div className=" hero__content-item hero__content-item-sm">
            <img src={womenImg} alt="women-style"/>
            <Button
              className="hero__btn"
              buttonStyle="btn-fill"
              buttonSize="btn-normal"
              link={"/women"}>Women
            </Button>
          </div>
          <div className="hero__content-item hero__content-item-sm">
            <img src={menImg} alt="men-style"/>
            <Button
              className="hero__btn"
              buttonStyle="btn-fill"
              buttonSize="btn-normal"
              link={"/men"}>Men
            </Button>
          </div>
          <div className="hero__content-item hero__content-item-lg">
            <img src={accessoriesImg} alt="women-accessories"/>
            <Button
              className="hero__btn"
              buttonStyle="btn-fill"
              buttonSize="btn-normal"
              link={"/accessories"}>Accessories
            </Button>
          </div>
        </div>
      </div>
      <HeroFooter/>
    </div>


  </div>);
};

export default HeroSection;
