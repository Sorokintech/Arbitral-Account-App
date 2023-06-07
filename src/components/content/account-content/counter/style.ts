import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const CartCountIcon = styled.img`
  margin: 0 10px;
  cursor: pointer;
  :nth-child(1) {
    width: 15px;
    height: 15px;
  }
  :nth-child(3) {
    width: 15px;
    height: 15px;
  }
`;
export const CartCountLabel = styled.label``;
export const CartCountInput = styled.input`
  width: 20px;
  display: flex;
  text-align: center;
`;
