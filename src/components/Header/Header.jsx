import React from "react";
import { Col, Flex, Badge, Input } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from "@ant-design/icons";
import {
  WrapperHeader,
  BrandImage,
  BrandText,
  HeaderAccount,
  HeaderAccountTitle,
  StyledCol,
} from "./style";

const Header = () => {
  return (
    <WrapperHeader>
      <Col span={4}>
        <Flex vertical aligns="center" justify="center" gap="middle">
          <BrandImage src="/images/myLogo.png" alt="Logo-image" />
          <BrandText>Dũng Dev</BrandText>
        </Flex>
      </Col>
      <Col span={12}>
        <Input.Search
          placeholder="Nhập tên sản phẩm, hãng ..."
          allowClear
          enterButton={<><SearchOutlined /> Tìm kiếm</>}
          size="large"
          // onSearch={onSearch}
        />
      </Col>
      <StyledCol span={8}>
        <HeaderAccount>
          <UserOutlined style={{ fontSize: "32px" }} />
          <HeaderAccountTitle>
            <span>Đăng nhập/ Đăng ký</span>
            <span>
              Tài khoản
              <CaretDownOutlined />
            </span>
          </HeaderAccountTitle>
        </HeaderAccount>
        <Flex gap="middle">
          <Badge
            count={100}
            overflowCount={99}
            color="#faad14"
            showZero
            style={{ fontSize: "12px" }}
          >
            <ShoppingCartOutlined
              style={{ fontSize: "32px", color: "white" }}
            />
          </Badge>
        </Flex>
      </StyledCol>
    </WrapperHeader>
  );
};

export default Header;
