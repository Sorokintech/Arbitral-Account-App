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
`;
export const AccountWrapper = styled.div`
  display: grid;
  padding: 50px 10px 10px 10px;
`;
export const AccountHeader = styled.h3``;
export const AccountTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* background-color: #ebebe0; */
  background-color: #000;
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
    margin: 0;
    opacity: 1;
    outline: 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-rendering: geometricprecision;
    text-transform: uppercase;
    transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
      background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
      color 100ms cubic-bezier(0.694, 0, 0.335, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
    cursor: pointer;

    :before {
      animation: opacityFallbackOut 0.5s step-end forwards;
      backface-visibility: hidden;
      /* background-color: #99ccff; */
      background-color: #79d279;
      clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform: translateZ(0);
      transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
        -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      width: 100%;
    }

    :hover:before {
      animation: opacityFallbackIn 0s step-start forwards;
      clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
    }

    :after {
      background-color: #ffffff;
    }
  }
`;
export const AccountBuyBtn = styled.button`
  z-index: 1;
  position: relative;
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
