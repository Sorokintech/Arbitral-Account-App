import * as S from "./style.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateInterface } from "../../../global/types.js";

export const OfferContent = () => {
  const CartLogoCounter = useSelector((state: StateInterface) => state["cart"]);
  return (
    <S.Container>
      <S.Main>
        <S.AccountWrapper>
          <h2>ПУБЛИЧНАЯ ОФЕРТА</h2>
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
