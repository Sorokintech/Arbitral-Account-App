import * as S from "./style.js";
import { accountsData } from "../../../global/mockData.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "../../../store/slices/cart.slice.js";
import { actions as accountActions } from "../../../store/slices/account-category.slice.js";
import React from "react";
import { Counter } from "./counter/index";

export const AccountContent: React.FC = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state : Object) => state.category);
  const [time, setTime] = React.useState(1);
  React.useEffect(() => {
    dispatch(accountActions.setCategory({ ...accountsData }));
  }, []);

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
          {accountsData.map(({ id, name, stock, price }) => (
            <S.AccountContainer key={id}>
              <S.AccountItem>{name}</S.AccountItem>
              <S.AccountItem>{stock}</S.AccountItem>
              <S.AccountItem>{price} руб / 1 шт.</S.AccountItem>
              <S.AccountItem>
                <Counter stock={stock} />
              </S.AccountItem>
              <S.AccountItem>
                <S.AccountBuyBtn
                  onClick={() =>
                    dispatch(
                      actions.toggleItemToCart({ id, name, price, time })
                    )
                  }
                >
                  Добавить в корзину
                </S.AccountBuyBtn>
              </S.AccountItem>
            </S.AccountContainer>
          ))}
        </S.AccountWrapper>
      </S.Main>
    </S.Container>
  );
};
