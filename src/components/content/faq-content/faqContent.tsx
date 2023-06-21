import { NavLink } from "react-router-dom";
import * as S from "./style.js";
import { useSelector } from "react-redux";
import { StateInterface } from "../../../global/types.js";

export const FaqContent = () => {
  const CartLogoCounter = useSelector((state: StateInterface) => state["cart"]);
  return (
    <S.Container>
      <S.Main>
        <S.AccountWrapper>
          <h2>FAQ</h2>
        </S.AccountWrapper>
      </S.Main>
      <NavLink to={"/cart"}>
        <S.ShoppingCartContainer>
          <S.ShoppingCartImg src="/icons/cart2.png"></S.ShoppingCartImg>
          <S.ShoppingCartAmount>{CartLogoCounter.length}</S.ShoppingCartAmount>
        </S.ShoppingCartContainer>
      </NavLink>
    </S.Container>
  );
};
