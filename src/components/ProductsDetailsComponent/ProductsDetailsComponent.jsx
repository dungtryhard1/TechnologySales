import React from "react";
import "./customDots.css";
import Slider from "react-slick";
import { Button, Col, Image, InputNumber, Rate, Row } from "antd";
import imageIphone12 from "../../assets/images/Iphone 12 details.png";
import imageIphone12Small from "../../assets/images/Iphone 12 small.png";
import {
  WrapperSmallImage,
  StyledCol,
  WrapperImage,
  WrapperRateAndSold,
  WrapperName,
  WrapperPriceAndDiscount,
  WrapperBrandName,
  WrapperText,
  StyledButton,
  WrapperDots,
} from "./style";

const ProductsDetailsComponent = () => {
  const arrImages = [
    imageIphone12,
    imageIphone12,
    imageIphone12,
    imageIphone12,
    imageIphone12,
    imageIphone12,
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,
    speed: 500,
    customPaging: (i) => (
      <WrapperDots src={arrImages[i]} alt={`slide-${i}`} width="32px" />
    ),
    dotsClass: "custom-dots",
  };
  return (
    <Row gutter={12} style={{ flexWrap: "nowrap", width: "100%" }}>
      <StyledCol span={6}>
        {/* <WrapperImage>
          <Image.PreviewGroup
            items={[
              { src: imageIphone12 },
              { src: imageIphone12 },
              { src: imageIphone12 },
            ]}
          >
            <Image src={imageIphone12} />
          </Image.PreviewGroup>
        </WrapperImage> */}
        <Slider {...settings}>
          {arrImages.map((image) => {
            return (
              <Image.PreviewGroup
                items={[imageIphone12, imageIphone12, imageIphone12]}
              >
                <Image src={image} alt="product image" preview={true} />
              </Image.PreviewGroup>
            );
          })}
        </Slider>
        {/* <Row gutter={10}>
          <Col span={4}>
            <WrapperSmallImage>
              <img src={imageIphone12Small} style={{ width: "100%" }} />
            </WrapperSmallImage>
          </Col>
          <Col span={4}>
            <WrapperSmallImage>
              <img src={imageIphone12Small} style={{ width: "100%" }} />
            </WrapperSmallImage>
          </Col>
          <Col span={4}>
            <WrapperSmallImage>
              <img src={imageIphone12Small} style={{ width: "100%" }} />
            </WrapperSmallImage>
          </Col>
          <Col span={4}>
            <WrapperSmallImage>
              <img src={imageIphone12Small} style={{ width: "100%" }} />
            </WrapperSmallImage>
          </Col>
          <Col span={4}>
            <WrapperSmallImage>
              <img src={imageIphone12Small} style={{ width: "100%" }} />
            </WrapperSmallImage>
          </Col>
          <Col span={4}>
            <WrapperSmallImage>
              <img src={imageIphone12Small} style={{ width: "100%" }} />
            </WrapperSmallImage>
          </Col>
        </Row> */}
      </StyledCol>
      <StyledCol span={11}>
        <WrapperName>
          Nồi cơm điện nắp rời Sunhouse SHD8105 (1,2L) - Hàng chính hãng
        </WrapperName>
        <WrapperRateAndSold>
          <h3>4.5</h3>
          <Rate disabled allowHalf defaultValue={4.5} />
          <em>|</em> Đã bán 36
        </WrapperRateAndSold>
        <WrapperPriceAndDiscount>
          <p>
            12.500.000
            <sup>₫</sup>
          </p>
          <div>-37%</div>
        </WrapperPriceAndDiscount>
      </StyledCol>
      <StyledCol span={6}>
        <WrapperBrandName>
          <img src={imageIphone12Small} width="40px" />
          <span>APPLE</span>
        </WrapperBrandName>
        <div style={{ marginTop: "20px" }}>
          <WrapperText>Số lượng</WrapperText>
          <InputNumber min={1} defaultValue={1} />
          <WrapperText>Tạm tính</WrapperText>
          <WrapperPriceAndDiscount>
            <p>
              12.500.000
              <sup>₫</sup>
            </p>
          </WrapperPriceAndDiscount>
          <div style={{ marginTop: "20px" }}>
            <StyledButton type="primary" block>
              Mua ngay
            </StyledButton>
            <StyledButton block>Thêm vào giỏ</StyledButton>
            <StyledButton block>Mua trước trả sau</StyledButton>
          </div>
        </div>
      </StyledCol>
    </Row>
  );
};

export default ProductsDetailsComponent;
