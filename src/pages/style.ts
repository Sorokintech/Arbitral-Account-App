import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  /* background: rgb(177, 177, 160);
  background: linear-gradient(
    62deg,
    rgba(177, 177, 160, 1) 13%,
    rgba(255, 255, 255, 1) 93%
  ); */
  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    335deg,
    rgba(255, 255, 255, 1) 6%,
    rgba(214, 239, 245, 1) 59%,
    rgba(255, 255, 255, 1) 80%,
    rgba(121, 205, 249, 1) 100%
  ); */
  background-image: url("/back/back17.jpg");
  background-repeat: none;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
