import styled from "styled-components";
import { Button } from "antd";

export const WrapperTypeProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  height: 44px;
`;
export const WrapperButtonMore = styled(Button)`
  width: 240px;
  height: 38px;
  border-radius: 8px;
  span {
    font-weight: 500;
  }
`;

