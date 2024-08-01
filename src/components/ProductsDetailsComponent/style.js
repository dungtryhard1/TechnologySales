import { Button, Col } from "antd";
import styled from "styled-components";

export const WrapperSmallImage = styled.div`
  padding: 4px;
  border: 1px solid rgb(235, 235, 240);
  border-radius: 6px;
`;
export const StyledCol = styled(Col)`
  background-color: #fff;
  border-radius: 6px;
  margin-right: 32px;
  padding: 16px !important;
  &:last-child {
    margin-right: 0;
  }
`;
export const WrapperImage = styled.div`
  border-radius: 6px;
`;
export const WrapperName = styled.p`
  color: rgb(39, 39, 42);
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;
export const WrapperRateAndSold = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  h3 {
    font-weight: 400;
    margin-bottom: 13px;
  }
  em {
    color: rgb(199, 199, 199);
  }
  span {
    font-size: 15px;
  }
`;
export const WrapperPrice = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
export const WrapperPriceAndDiscount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
  div {
    background: rgb(245, 245, 250);
    border-radius: 8px;
    color: rgb(39, 39, 42);
    font-weight: 400;
    padding: 0 4px;
  }
`;
export const WrapperBrandName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  div {
    background: rgb(245, 245, 250);
    border-radius: 8px;
    color: rgb(39, 39, 42);
    font-weight: 400;
    padding: 0 4px;
  }
  &::after {
    content: "";
    border: 1px solid #efefef;
    width: 100%;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
  }
`;
export const WrapperText = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
export const StyledButton = styled(Button)`
  padding: 12px 0;
  margin-top: 12px
`
export const WrapperDots = styled.img`
  width: 32px;
`
