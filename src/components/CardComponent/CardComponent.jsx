import React from "react";
import {
  StyleNameProduct,
  WrapperCard,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import IphoneImg from "../../assets/images/Iphone 12.png"

const CardComponent = () => {
  return (
    <WrapperCard
      hoverable
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src={IphoneImg}
        />
      }
    >
      <StyleNameProduct>Iphone 12</StyleNameProduct>
      <WrapperReportText>
        <span>
          <span>4.75</span>
          <StarFilled
            style={{ fontSize: "11px", color: "#FFCC00", margin: "0 4px" }}
          />
        </span>
        <span>| Đã bán 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        12.500.000đ
        <WrapperDiscountText>-12%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCard>
  );
};

export default CardComponent;
