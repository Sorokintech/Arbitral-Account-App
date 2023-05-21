import styled from "styled-components";

export const Wrapper = styled.div`
  width: 180px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: end;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const SideBar = styled.div`
  padding-top: 15px;
`;
export const LogoMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  /* justify-content: center; */
  /* gap: 15px; */
`;
export const Logo = styled.div`
  color: #000;
  font-size: 40px;
  text-align: center;
  /* width: 150px; */
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000;
    outline: none;
  }
`;
export const BurgerMenu = styled.div`
  > div {
    width: 25px;
    height: 4px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.4s;
    padding-right: 15px;
    box-sizing: border-box;
  }
`;
export const ItemContainer = styled.div`
  color: #000;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  padding-left: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  text-align: start;
`;
export const ItemSection = styled.div`
  color: #000;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  padding-left: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  text-align: start;
  font-weight: 400;
  font-size: 18px;
  a {
    text-decoration: none;
    color: #000;
    outline: none;
    :hover {
      color: #99ccff;
    }
  }
  :hover {
    color: #99ccff;
  }
`;
export const Item = styled.div`
  color: #000;
  width: 100%;
  font-size: 15px;
  transition: 0.25s;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  padding-left: 20px;
  padding-top: 10px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: #000;
    outline: none;
    :hover {
      color: #99ccff;
    }
  }
  :hover {
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  bottom: 0;
  padding-left: 15px;
  padding-right: 20px;
  padding-bottom: 20px;
`;
export const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.25);
  }
`;
