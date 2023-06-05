import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
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
      color: #79d279;
    }
  }
  :hover {
    color: #79d279;
  }
`;
export const Item = styled.div`
  a {
    text-decoration: none;
    color: #000;
    outline: none;
    :hover {
      color: #79d279;
    }
  }
  :hover {
  }
`;
