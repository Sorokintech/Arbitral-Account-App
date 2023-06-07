import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  margin-bottom: 70px;
`;

export const Main = styled.div`
  background-color: #fff;

  /* opacity: 0.5; */
  width: 1150px;
  height: fit-content;
  border-radius: 5px;
  padding: 30px 0;
`;
export const AccountWrapper = styled.div`
  display: grid;
  padding: 10px 10px 10px 10px;
`;
export const AccountHeader = styled.h3`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;
export const AccountTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* background-color: #ebebe0; */
  /* background-color: #90c2f2; */
  background-color: #4ba7bc;
  color: #fff;
`;
export const AccountTitleItem = styled.div`
  display: grid;
  /* border: 1px solid #b3b3b3; */
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  box-sizing: border-box;

  :nth-child(1) {
    grid-column: span 3;
    justify-content: center;
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
  }
  :nth-child(3) {
    grid-column: span 2;
    justify-content: center;
  }
  :nth-child(4) {
    grid-column: span 2;
    justify-content: center;
  }
`;
export const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
`;
export const AccountItem = styled.div`
  /* display: grid; */
  display: flex;
  border: 1px solid #b3b3b3;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
  :nth-child(1) {
    grid-column: span 3;
    justify-self: start;
    padding-left: 10px;
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
  }
  :nth-child(3) {
    grid-column: span 2;
    justify-content: center;
  }
  :nth-child(4) {
    grid-column: span 1;
    justify-content: center;
  }
  :nth-child(5) {
    grid-column: span 1;
    justify-content: center;
    appearance: none;
    background-color: #ffffff;
    border: 1px solid #b3b3b3;
    padding: 5px;
    color: #000000;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
`;
export const AccountBuyBtn = styled.button`
  /* position: relative; */
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const CartCountIcon = styled.img`
  margin: 0 10px;
  cursor: pointer;
  :nth-child(1) {
    width: 20px;
    height: 20px;
  }
  :nth-child(2) {
    width: 20px;
    height: 20px;
  }
`;
