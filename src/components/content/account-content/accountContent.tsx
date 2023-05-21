import * as S from "./style.js";
import { accountsData } from "../../../global/mockData.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "../../../store/slices/cart.slice.js";

export const AccountContent = () => {
  const go = (item: object) => {
    console.log(item);
  };
  const dispatch = useDispatch()
  const cart = useSelector(state => state)
  console.log(cart)
  return (

    <S.Container>
      <S.Main>
        <S.AccountWrapper>
          <S.AccountHeader></S.AccountHeader>
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
              <S.AccountItem>{price}</S.AccountItem>
              <S.AccountItem>
                <S.AccountBuyBtn onClick={() => dispatch(actions.toggleItemToCart({id, name, stock, price}))}>Добавить в корзину</S.AccountBuyBtn>
              </S.AccountItem>
            </S.AccountContainer>
          ))}
        </S.AccountWrapper>
      </S.Main>
    </S.Container>
  );
};
