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
  padding: 10px 10px 10px 10px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const AccountHeader = styled.h3`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 923px) {
  }
`;
export const AccountTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #4ba7bc;
  color: #fff;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 768px) {
  }
`;
export const AccountTitleItem = styled.div`
  display: grid;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  box-sizing: border-box;

  :nth-child(1) {
    grid-column: span 3;
    justify-content: center;
    @media (max-width: 923px) {
      grid-column: span 8;
    }
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: 1200px) {
    }
    @media (max-width: 923px) {
      display: none;
    }
  }
  :nth-child(3) {
    grid-column: span 2;
    justify-content: center;
    @media (max-width: 923px) {
      display: none;
    }
  }
  :nth-child(4) {
    grid-column: span 2;
    justify-content: center;
    @media (max-width: 923px) {
      display: none;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  @media (max-width: 1200px) {
  }
  @media (max-width: 923px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3px;
    /* border: 1px solid #79d279; */
    background-color: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;
export const AccountItem = styled.div`
  display: flex;
  border: 1px solid #b3b3b3;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  :nth-child(1) {
    grid-column: span 3;
    justify-self: start;
    padding-left: 10px;
    @media (max-width: 923px) {
      grid-column: span 2;
    }
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: 923px) {
      grid-column: span 2;
    }
  }
  :nth-child(3) {
    grid-column: span 2;
    justify-content: center;
    @media (max-width: 923px) {
      grid-column: span 1;
    }
  }
  :nth-child(4) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: p768x) {
      grid-column: span 1;
    }
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
    transition: 0.25s ease-in-out;
    :hover {
      background-color: #79d279;
      color: #fff;
      > button {
        color: #fff;
      }
    }
    @media (max-width: 923px) {
      grid-column: span 2;
      background-color: #79d279;
      > button {
        color: #fff;
      }
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 923px) {
    justify-content: center;
  }
`;
export const AccountBuyBtn = styled.button`
  background-color: transparent;
  outline: none;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  @media (max-width: 1200px) {
  }
  @media (max-width: 923px) {
  }
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
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const AccountCountryImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  padding-right: 10px;
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
