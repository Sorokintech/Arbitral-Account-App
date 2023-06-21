import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 15%;
  @media (max-width: 1200px) {
    padding: 10px 10%;
  }
  @media (max-width: 768px) {
  }
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 5px;
    justify-content: space-between;
  }
`;
export const LogoWrapper = styled.div``;
export const Logo = styled.div`
  font-size: 25px;
  cursor: pointer;
  :nth-child(2) {
    display: none;
  }
  a {
    text-decoration: none;
    color: #000;
    outline: none;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    :nth-child(1) {
      display: none;
    }
    :nth-child(2) {
      display: block;
    }
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  transition: all 0.2s;
  @media (max-width: 1200px) {
    gap: 15px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;
export const DropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 10px;
  padding: 10px;
  border-radius: 4px;
  @media (max-width: 1200px) {
    padding: 5px;
  }
  @media (max-width: 768px) {
  }
`;

export const ItemSection = styled.div`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  text-align: start;
  font-size: 18px;
  a {
    text-decoration: none;
    color: #000;
    outline: none;
    :hover {
      color: #4ba7bc;
    }
  }
  :hover {
    color: #4ba7bc;
  }
  :nth-child(2) {
    @media (max-width: 768px) {
      display: none;
    }
  }
  :nth-child(3) {
    @media (max-width: 768px) {
      display: none;
    }
  }
  :nth-child(4) {
    @media (max-width: 768px) {
      display: none;
    }
  }
  :nth-child(5) {
    @media (max-width: 768px) {
      display: none;
    }
  }
  :nth-child(6) {
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Item = styled.div`
  a {
    text-decoration: none;
    color: #000;
    outline: none;
    :hover {
      color: #4ba7bc;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;

export const ShoppingCartContainer = styled.div`
  margin-bottom: -25px;
  transition: 0.25s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 768px) {
  }
`;
export const ShoppingCartImg = styled.img`
  width: 30px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const ShoppingCartAmount = styled.div`
  position: relative;
  top: -45px;
  left: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #79d279;
  text-align: center;
  font-size: 14px;
  color: #fff;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
