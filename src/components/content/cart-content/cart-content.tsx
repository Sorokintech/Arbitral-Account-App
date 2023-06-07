import { accountsData } from "../../../global/mockData.js";
import { actions } from "../../../store/slices/cart.slice.js";
import { Counter } from "../account-content/counter/index.js";
import * as S from "./style.js";

export const CartContent = () => {
  return (
    <S.Container>
      <S.Main>
        <S.CartWrapper>
          <S.Title>Ваша текущая корзина</S.Title>
          <S.AccountTitleContainer>
            <S.AccountTitleItem>Название продукта</S.AccountTitleItem>
            <S.AccountTitleItem>Количество</S.AccountTitleItem>
            <S.AccountTitleItem>Итого стоимость</S.AccountTitleItem>
          </S.AccountTitleContainer>
          {accountsData.map(({ id, name, stock, price }) => (
            <S.AccountContainer key={id}>
              <S.AccountItem>{name}</S.AccountItem>
              <S.AccountItem>
                <Counter stock={stock} />
              </S.AccountItem>
              <S.AccountItem>{price}</S.AccountItem>
            </S.AccountContainer>
          ))}
        </S.CartWrapper>
        <S.PaymentWrapper>
          <S.PaymentText>Итоговая сумма:</S.PaymentText>
          <S.PaymentSum>24800.00 руб.</S.PaymentSum>
          <S.PaymentBtn>Оформить заказ</S.PaymentBtn>
        </S.PaymentWrapper>
      </S.Main>
    </S.Container>
  );
};
