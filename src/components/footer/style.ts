import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: none;
  background-color: #fff;
  /* background: rgb(117, 153, 117);
  background: linear-gradient(
    270deg,
    rgba(117, 153, 117, 1) 0%,
    rgba(218, 218, 190, 1) 10%,
    rgba(255, 255, 255, 1) 52%
  ); */
  position: fixed;
  bottom: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 60px;
  justify-content: flex-end;
  gap: 50px;
`;
export const Info = styled.div``;
export const InfoIcon = styled.img``;
export const InfoItem = styled.div``;
export const Links = styled.div`
  display: flex;
  gap: 10px;
  /* padding-top: 10px;
  padding-left: 15px;
  padding-right: 20px;
  padding-bottom: 20px; */
`;
export const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;
