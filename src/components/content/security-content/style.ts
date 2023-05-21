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
export const AccountWrapper = styled.div`
  display: grid;
  padding: 20px 10px 10px 10px;
  > h2,
  h3,
  p {
    padding: 0 10px 20px 20px;
  }
  > p {
    font-size: 18px;
  }
`;
