import { Col, Pagination, Row } from "antd";
import styled from "styled-components";

export const StyledCol= styled(Col)`
    background: #fff;
    padding: 10px;
    margin-right: 10px;
    border-radius: 6px;
`
export const StyledRow= styled(Row)`
    padding: 32px 60px;
    background-color: #efefef;
    flex-wrap: nowrap;
`
export const StyledPagination= styled(Pagination)`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`