import { accountsData } from "../../../global/mockData.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions as CartActions } from "../../../store/slices/cart.slice.js";
import { Counter } from "../account-content/counter/index.js";
import * as S from "./style.js";
interface StateInt {
  cart: [
    {
      id: number;
      name: string;
      stock: number;
      price: number;
      toAdd: number;
    }
  ];
  category: [
    {
      id: number;
      name: string;
      stock: number;
      price: number;
      toAdd: number;
    }
  ];
}
export const CartContent = () => {
  let cart = useSelector((state: StateInt) => state["cart"]);
  return (
    <S.Container>
      <S.Main>
        <S.CartWrapper>
          <S.Title>Ваша текущая корзина</S.Title>
          {cart.length > 0 ? (
            <S.AccountTitleContainer>
              <S.AccountTitleItem>Название продукта</S.AccountTitleItem>
              <S.AccountTitleItem>Количество</S.AccountTitleItem>
              <S.AccountTitleItem>Итого стоимость</S.AccountTitleItem>
            </S.AccountTitleContainer>
          ) : (
            "К сожалению, пока здесь пусто"
          )}
          {cart.map(({ id, name, stock, price }) => (
            <S.AccountContainer key={id}>
              <S.AccountItem>{name}</S.AccountItem>
              <S.AccountItem>
                <Counter stock={stock} />
              </S.AccountItem>
              <S.AccountItem>{price}</S.AccountItem>
            </S.AccountContainer>
          ))}
        </S.CartWrapper>
        {cart.length > 0 ? (
          <S.PaymentWrapper>
            <S.PaymentText>Итоговая сумма:</S.PaymentText>
            <S.PaymentSum>24800.00 руб.</S.PaymentSum>
            <S.PaymentBtn>Оформить заказ</S.PaymentBtn>
          </S.PaymentWrapper>
        ) : (
          ""
        )}
      </S.Main>
    </S.Container>
  );
};
