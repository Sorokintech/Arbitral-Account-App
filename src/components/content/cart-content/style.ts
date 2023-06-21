import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  padding: 40px 15%;
  @media (max-width: 1200px) {
    padding: 20px 10%;
  }
  @media (max-width: 768px) {
  }
`;

export const Main = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 5px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const CartWrapper = styled.div`
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
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const Title = styled.h3`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const AccountTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #79d279;
  color: #fff;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const AccountTitleItem = styled.div`
  display: grid;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  box-sizing: border-box;

  :nth-child(1) {
    grid-column: span 6;
    justify-content: center;
    @media (max-width: 1200px) {
      grid-column: span 5;
    }
    @media (max-width: 768px) {
      grid-column: span 2;
    }
  }
  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: 1200px) {
      grid-column: span 1;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  :nth-child(3) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: 1200px) {
      grid-column: span 2;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const AccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3px;
    /* border: 1px solid #79d279; */
    background-color: #f4f4f4;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;
export const AccountItem = styled.div`
  display: flex;
  border: 1px solid #b3b3b3;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
  :nth-child(1) {
    grid-column: span 6;
    justify-self: start;
    padding-left: 10px;
    @media (max-width: 1200px) {
      grid-column: span 5;
    }
    @media (max-width: 768px) {
      grid-column: span 2;
      justify-content: center;
    }
  }

  :nth-child(2) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: 1200px) {
    }
    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
  :nth-child(3) {
    grid-column: span 1;
    justify-content: center;
    @media (max-width: 1200px) {
      grid-column: span 2;
    }
    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
export const PaymentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 50px;
  gap: 10px;
  align-items: center;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
    gap: 5px;
  }
`;
export const PaymentText = styled.div``;
export const PaymentSum = styled.div``;
export const PaymentBtn = styled.button`
  width: 150px;
  padding: 5px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.25s ease-in-out;
  border-radius: 4px;
  background-color: #4ba7bc;
  color: #fff;
  :hover {
    transform: scale(1.05);
    background-color: #79d279;
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 10px;
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
export const AccountCountryImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  padding-right: 10px;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
  }
`;
