import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: rgb(227, 222, 255);
  background: linear-gradient(
    180deg,
    rgba(227, 222, 255, 1) 0%,
    rgba(255, 255, 255, 1) 36%
  );
  /* background: rgb(117, 153, 117);
  background: linear-gradient(
    270deg,
    rgba(117, 153, 117, 1) 0%,
    rgba(218, 218, 190, 1) 10%,
    rgba(255, 255, 255, 1) 52%
  ); */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 300px;
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 130px;
`;
export const LogoWrapper = styled.div``;
export const Logo = styled.div`
  font-size: 25px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000;
    outline: none;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  transition: all 0.2s;
`;
export const DropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  gap: 10px;
  border-radius: 4px;
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
  :hover {
  }
`;

export const ShoppingCartContainer = styled.div`
  margin-bottom: -25px;
  transition: 0.25s ease-in-out;
  :hover {
    transform: scale(1.15);
  }
`;
export const ShoppingCartImg = styled.img`
  width: 30px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  /* :hover {
    transform: scale(1.3);
  } */
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
`;
