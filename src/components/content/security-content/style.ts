import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  padding: 40px 15%;
  @media (max-width: 1200px) {
    padding: 20px 10%;
  }
  @media (max-width: 768px) {
  }
`;

export const Main = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const AccountWrapper = styled.div`
  display: grid;
  padding: 20px 10px 10px 10px;
  > h2,
  h3,
  p {
    padding: 0 10px 20px 20px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  > p {
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ShoppingCartContainer = styled.div`
  display: none;
  @media (max-width: 1200px) {
    position: fixed;
    bottom: 40px;
    right: 10px;
    width: 55px;
    height: 55px;
    border-radius: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
  }
`;
export const ShoppingCartImg = styled.img`
  @media (max-width: 1200px) {
    width: 35px;
    height: 35px;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  @media (max-width: 768px) {
  }
`;
export const ShoppingCartAmount = styled.div`
  @media (max-width: 1200px) {
    position: relative;
    top: -15px;
    left: -15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #79d279;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
  @media (max-width: 768px) {
  }
`;
