import React from "react";
import {
  WrapperNavbarContent,
  WrapperNavbarLabel,
  WrapperNavbarText,
  WrapperPriceText,
} from "./style";

import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperNavbarText key={option}>{option}</WrapperNavbarText>;
        });
      case "checkbox":
        return options.map((option) => {
          return (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          );
        });
      case "star":
        return options.map((option) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
              }}
            >
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>Từ {option} sao</span>
            </div>
          );
        });
      case "price":
        return options.map(option => {
            return (
                <WrapperPriceText>{option}</WrapperPriceText>
            )
        })
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "200px" }}>
      <WrapperNavbarLabel>Label</WrapperNavbarLabel>
      <WrapperNavbarContent>
        {renderContent("text", ["Tủ lạnh", "TV", "Máy giặt"])}
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
        {renderContent("star", [5, 4, 3])}
        {renderContent("price", [
          "Dưới 1.000.000đ",
          "Từ 1.000.000đ đến 3.000.000đ",
          "Trên 3.000.000đ",
        ])}
      </WrapperNavbarContent>
    </div>
  );
};

export default NavbarComponent;
