import React from 'react'
import styled from 'styled-components';
import { useHistory } from "react-router";


const ProductContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color:lightblue;
  }
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;
  img {
    width: auto;
    height: 100%;
  }
`;

const Price = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

export  function ProductShows(props) {
  const history = useHistory();
    return (
        <ProductContainer onClick={() => {
          history.push(`detail_produk/${props.product_id}`);
        }}>
            <Thumbnail >
                <img src={props.image} />
            </Thumbnail>
            <Name>{props.name}</Name>
            <Price>Rp {props.price}</Price>
        </ProductContainer>
    )
}
