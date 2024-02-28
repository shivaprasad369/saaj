import React, { Component } from "react";
import Slider from "react-slick";


function FocusOnSelect() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    vertical:true,
    slidesToScroll: 1,
    speed: 500,
   
  };
  return (
    <div className="slider-container">
      <div>Click on any slide to select and make it current slide</div>
      <Slider {...settings}>
        <div>
          <h3>slide1</h3>
        </div>
        <div>
          <h3>slide2</h3>
        </div>
        <div>
          <h3>slide3</h3>
        </div>
        <div>
          <h3>slide4</h3>
        </div>
        <div>
          <h3>slide5</h3>
        </div>
        <div>
          <h3>slide6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default FocusOnSelect;
