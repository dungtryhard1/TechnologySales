import React from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Pagination, Row } from "antd";
import { StyledCol, StyledPagination, StyledRow } from "./style";

const TypeProductsPage = () => {
  const onChange = () => {

  };
  return (
    <StyledRow gutter={10}>
      <StyledCol span={5}>
        <NavbarComponent />
      </StyledCol>
      <Col span={19}>
        <Row gutter={[0, 32]}>
          <Col span={6}><CardComponent /></Col>
          <Col span={6}><CardComponent /></Col>
          <Col span={6}><CardComponent /></Col>
          <Col span={6}><CardComponent /></Col>
          <Col span={6}><CardComponent /></Col>
          <Col span={6}><CardComponent /></Col>
        </Row>
        <StyledPagination showQuickJumper defaultCurrent={1} total={100} onChange={onChange} />
      </Col>
    </StyledRow>
  );
};

export default TypeProductsPage;
