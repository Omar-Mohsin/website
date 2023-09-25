import React from "react";
import { styled } from "styled-components";
import { addItem } from "../../../../feature/cart/cartsSlice";
import { useDispatch } from "react-redux";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
function ProductDescription({ matchedProduct }: any) {
  const dispatch = useDispatch();

  const onAddHandler = (matchedProduct: Product) => {
    dispatch(addItem(matchedProduct));
  };
  return (
    <>
      <Title>{matchedProduct.title}</Title>
      <Descirption>{matchedProduct.description}</Descirption>
      <Price>${matchedProduct.price}</Price>
      <AddToCartButton onClick={() => onAddHandler(matchedProduct)}>
        ADD TO CART
      </AddToCartButton>
    </>
  );
}

export default ProductDescription;

const Title = styled.h4`
  font-size: 24px;
  color: #176b87; /* Orange color for title */
  margin-bottom: 10px;
`;

const Descirption = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #ff5733; /* Teal color for price */
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #176b87; /* Orange color for button */
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fff; /* Lighter orange on hover */
    color: #000;
  }
`;