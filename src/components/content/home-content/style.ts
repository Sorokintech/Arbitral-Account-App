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
export const HomeWrapper = styled.div`
  display: grid;
  padding: 20px 10px 10px 10px;
  text-align: center;
  h1 {
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  h2 {
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const HomeMenuHeader = styled.h2`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding-top: 30px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #cce6ff;
  border: 1px solid #000;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.25s;
  > a {
    text-decoration: none;
    width: 100%;
    color: #000;
    outline: none;
  }
  :hover {
    transform: scale(1.01);
    color: #79d279;
    border: 1px solid #4ba7bc;
    > a {
      color: #4ba7bc;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;

export const Banner = styled.div`
  display: flex;
  height: 150px;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* background-color: #000; */
  color: #000;
  border: 1px solid #fff;
  :nth-child(1) {
    background-color: #98e6e6;
  }
  :nth-child(2) {
    background-color: #ccb3ff;
  }
  :nth-child(3) {
    background-color: #d9ffb3;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
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
