import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: none;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 60px;
  justify-content: flex-end;
  gap: 50px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    padding: 10px 30px;
  }
`;
export const Info = styled.div``;
export const InfoIcon = styled.img``;
export const InfoItem = styled.div``;
export const Links = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const Icon = styled.img`
  width: 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const SmileIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
