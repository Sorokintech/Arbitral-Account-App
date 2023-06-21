import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: ${(props) => props.theme.lat};
  left: ${(props) => props.theme.lng};
`;
export const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: transparent;
  border-radius: 50%;
  > img {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
export const DogImage = styled.img`
  position: relative;
  box-sizing: border-box;
`;
