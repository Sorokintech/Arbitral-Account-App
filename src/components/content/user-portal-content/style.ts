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
  height: fit-content;
  border-radius: 5px;
`;
export const UserPortalWrapper = styled.div`
  display: grid;
  padding: 20px 10px 10px 10px;
`;
export const UserPortalHeader = styled.h2`
  display: flex;
  padding-left: 30px;
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
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.25s;
  :hover {
    transform: scale(1.01);
    color: #79d279;
    border: 1px solid #79d279;
  }
`;
