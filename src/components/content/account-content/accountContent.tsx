import * as S from "./style.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { actions } from "../../../store/slices/cart.slice.js";
import { actions as accountActions } from "../../../store/slices/account-category.slice.js";
import { Counter } from "./counter/index";
import { StateInterface, CartAddInterface } from "../../../global/types.js";

export const AccountContent: React.FC = () => {
  const dispatch = useDispatch();
  const CartLogoCounter = useSelector((state: StateInterface) => state["cart"]);
  let accountCategory = useSelector(
    (state: StateInterface) => state["category"]
  );
  const AddItemToCart = ({
    id,
    country,
    name,
    price,
    toAdd,
    stock,
  }: CartAddInterface) => {
    dispatch(
      actions.toggleItemToCart({ id, country, name, price, toAdd, stock })
    );
    dispatch(accountActions.clearAmount({ id }));
    dispatch(accountActions.setStock({ id, toAdd, stock }));
  };

  return (
    <S.Container>
      <S.Main>
        <S.AccountWrapper>
          <S.AccountHeader>Аккаунты</S.AccountHeader>
          <S.AccountTitleContainer>
            <S.AccountTitleItem>Название продукта</S.AccountTitleItem>
            <S.AccountTitleItem>В наличии</S.AccountTitleItem>
            <S.AccountTitleItem>Цена</S.AccountTitleItem>
            <S.AccountTitleItem>Купить</S.AccountTitleItem>
          </S.AccountTitleContainer>
          {accountCategory.map(({ id, country, name, stock, price, toAdd }) => (
            <S.AccountContainer key={id}>
              {/* <S.AccountItem> */}

              {/* </S.AccountItem> */}
              <S.AccountItem>
                <S.AccountCountryImg src={`/icons/countries/${country}.png`} />
                {name}
              </S.AccountItem>
              <S.AccountItem>{stock}</S.AccountItem>
              <S.AccountItem>{price} руб / 1 шт.</S.AccountItem>
              <S.AccountItem>
                <Counter
                  value={toAdd}
                  max={stock}
                  onChange={(v) =>
                    dispatch(accountActions.setAmount({ counter: v, id }))
                  }
                />
              </S.AccountItem>
              <S.AccountItem>
                <S.AccountBuyBtn
                  onClick={() =>
                    AddItemToCart({ id, country, name, price, toAdd, stock })
                  }
                >
                  Добавить
                </S.AccountBuyBtn>
              </S.AccountItem>
            </S.AccountContainer>
          ))}
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
