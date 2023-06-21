import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const ModalBlock = styled.div`
  background-color: #fff;
  position: absolute;
  z-index: 5;
  left: calc(60% - (600px / 2));
  top: 30%;
  opacity: 1;
  border-radius: 5px;
  @media (max-width: 1200px) {
    left: calc(60% - (500px / 2));
  }
  @media (max-width: 768px) {
    left: calc(60% - (380px / 2));
  }
`;
export const ModalContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: center;
  width: 200px;
  height: auto;
  padding: 32px 50px 42px;
  background-color: #ffffff;
  border-radius: 12px;
  position: relative;
  transition: 0.25s;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const ModalTitle = styled.div`
  padding-bottom: 10px;
  color: #000;
  cursor: default;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const LoginBtn = styled.button`
  width: 200px;
  padding: 5px 0;
  box-sizing: border-box;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 3px;
  transition: 0.25s;
  :hover {
    transform: scale(1.05);
    color: #4ba7bc;
    border: 1px solid #4ba7bc;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const LoginLabel = styled.label``;
export const LoginUser = styled.input`
  width: 100%;
  padding: 5px 0;
  border: 1px solid #000;
  border-radius: 3px;
  margin-bottom: 10px;
  text-align: center;
  :focus {
    border: 1px solid #4ba7bc;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const LoginPassword = styled.input`
  width: 100%;
  padding: 5px 0;
  border: 1px solid #000;
  border-radius: 3px;
  margin-bottom: 10px;
  text-align: center;
  :focus {
    border: 1px solid #4ba7bc;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const LoginPasswordRepeat = styled.input`
  width: 100%;
  padding: 5px 0;
  border: 1px solid #000;
  border-radius: 3px;
  margin-bottom: 10px;
  text-align: center;
  :focus {
    border: 1px solid #4ba7bc;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const RegisterBtn = styled.button`
  width: 200px;
  padding: 5px 50px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.25s;
  :hover {
    transform: scale(1.05);
    color: #4ba7bc;
    border: 1px solid #4ba7bc;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
