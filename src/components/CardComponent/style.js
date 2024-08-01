import { Card } from "antd";
import styled from "styled-components";

export const WrapperCard = styled(Card)`
  width: 200px;
  & img {
    height: 200px;
    width: 200px;
  }
`;

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
  margin: 0 0 8px;
`;
export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 132);
  display: flex;
  align-items: center;
  margin: 6px 0 2px;
`;
export const WrapperPriceText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgb(255, 66, 78);
  overflow: hidden;
`;
export const WrapperDiscountText = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: rgb(255, 66, 78);
`;
