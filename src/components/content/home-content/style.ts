import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-top: 40px;
`;

export const Main = styled.div`
  background-color: #fff;
  /* opacity: 0.5; */
  width: 1250px;
  height: fit-content;
  border-radius: 5px;
`;
export const HomeWrapper = styled.div`
  display: grid;
  padding: 20px 10px 10px 10px;
  text-align: center; 
`;
export const HomeMenuHeader = styled.h2`
display: flex;
justify-content: center;
padding-left: 30px;
padding-top: 20px;
  `;
export const ItemContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 10px;
padding-top: 30px;

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
  a {
    text-decoration: none;
    color: #000;
    outline: none;
  }
  :hover {
    transform: scale(1.01);
    color: #99ccff;
    border: 1px solid #99ccff;
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
  };
  :nth-child(2) {
    background-color: #ccb3ff;
  };
  :nth-child(3) {
    background-color: #d9ffb3;
  };
`
