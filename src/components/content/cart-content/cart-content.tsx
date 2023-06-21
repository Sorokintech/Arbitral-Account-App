import * as S from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { actions as CartActions } from "../../../store/slices/cart.slice.js";
import { actions as accountActions } from "../../../store/slices/account-category.slice.js";
import { Counter } from "../account-content/counter/index.js";
import {
  StateInterface,
  CartLogicCounterInterface,
} from "../../../global/types.js";

export const CartContent = () => {
  let cart = useSelector((state: StateInterface) => state["cart"]);
  let totalSum: number[] = [];
  cart.forEach((el) => {
    totalSum.push(el.price * el.toAdd);
  });
  const dispatch = useDispatch();
  const AddItemToCart = ({ id, v, stock }: CartLogicCounterInterface) => {
    dispatch(CartActions.setAmount({ counter: v, id }));
    dispatch(accountActions.setStock({ id, toAdd: v, stock }));
  };
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
          {cart.map(({ id, country, name, stock, price, toAdd }) => (
            <S.AccountContainer key={id}>
              <S.AccountItem>
                <S.AccountCountryImg src={`/icons/countries/${country}.png`} />
                {name}
              </S.AccountItem>
              <S.AccountItem>
                <Counter
                  value={toAdd}
                  max={stock}
                  onChange={(v) => AddItemToCart({ id, v, stock })}
                />
              </S.AccountItem>
              <S.AccountItem>
                {price * toAdd}.00 руб.
                <S.Icon
                  src="/icons/delete.png"
                  onClick={() => dispatch(CartActions.removeItem({ id }))}
                  data-tooltip={"hello"}
                ></S.Icon>
              </S.AccountItem>
            </S.AccountContainer>
          ))}
        </S.CartWrapper>
        {cart.length > 0 ? (
          <S.PaymentWrapper>
            <S.PaymentText>Итоговая сумма:</S.PaymentText>
            <S.PaymentSum>
              {totalSum.reduce((a, b) => +a + +b)}.00 руб.
            </S.PaymentSum>

            <S.PaymentBtn>Оформить заказ</S.PaymentBtn>
          </S.PaymentWrapper>
        ) : (
          ""
        )}
      </S.Main>
    </S.Container>
  );
};
