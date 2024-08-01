import { Image } from "antd";
import React from "react";
import Slider from "react-slick";

function SliderComponent({ arrImages }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {arrImages.map((image) => {
          return (
            <Image
              src={image}
              alt="product image"
              preview={false}
              width="100%"
              height="274px"
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderComponent;
