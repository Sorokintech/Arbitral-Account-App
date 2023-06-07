import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  margin-bottom: 70px;
`;

export const Main = styled.div`
  background-color: #fff;
  width: 1150px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 5px;
`;
export const CartWrapper = styled.div`
  display: grid;
  padding: 20px 10px 10px 10px;
  > h2,
  h3,
  p {
    padding: 0 10px 20px 20px;
  }
  > p {
    font-size: 18px;
  }
`;
export const Title = styled.h3`
  display: flex;
  justify-content: flex-end;
`;
export const Div = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
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
    grid-column: span 6;
    justify-content: center;
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
  }
  :nth-child(3) {
    grid-column: span 1;
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
    grid-column: span 6;
    justify-self: start;
    padding-left: 10px;
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
  }
  :nth-child(3) {
    grid-column: span 1;
    justify-content: center;
  }
`;
export const PaymentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 50px;
  gap: 10px;
  align-items: center;
`;
export const PaymentText = styled.div``;
export const PaymentSum = styled.div``;
export const PaymentBtn = styled.button`
  width: 150px;
  padding: 5px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.25s ease-in-out;
  border-radius: 4px;
  background-color: #4ba7bc;
  color: #fff;
  :hover {
    transform: scale(1.05);

    background-color: #79d279;
  }
`;
