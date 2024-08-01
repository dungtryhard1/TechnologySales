import React from "react";
import TypeProducts from "../../components/TypeProducts/TypeProducts";
import { WrapperButtonMore, WrapperTypeProducts } from "./style";
import slider1 from "../../assets/images/fridge.png";
import slider2 from "../../assets/images/laptop.png";
import slider3 from "../../assets/images/tv.png";
import slider4 from "../../assets/images/washingMachine.png";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Row } from "antd";

const HomePage = () => {
  const arr = ["Tủ lạnh", "Tv", "Laptop", "Máy giặt"];
  return (
    <>
      <div style={{ padding: "0 60px" }}>
        <WrapperTypeProducts>
          {arr.map((item) => {
            return <TypeProducts name={item} key={item} />;
          })}
        </WrapperTypeProducts>
      </div>
      <div
        id="container"
        style={{
          color: "#000",
          backgroundColor: "#efefef",
          padding: "0 60px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
        <Row gutter={[8, 20]} style={{ marginTop: "40px" }}>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
          <Col xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}><CardComponent /></Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <WrapperButtonMore>
            <span>Xem thêm</span>
          </WrapperButtonMore>
        </div>
      </div>
    </>
  );
};

export default HomePage;
