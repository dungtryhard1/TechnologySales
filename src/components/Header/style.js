import { Col, Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 60px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;
export const BrandImage = styled.img`
  width: 60px;
`;
export const BrandText = styled.span`
  font-weight: bold;
  text-shadow: 1px 1px 2px #000, 0 0 25px #0ff, 0 0 5px #00f;
`;
export const HeaderAccount = styled.div`
  display: flex;
  gap: 12px;
  margin: -3px 0px 0;
`;
export const HeaderAccountTitle = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;
export const StyledCol = styled(Col)`
  display: flex;
  justify-content: space-around;
`


