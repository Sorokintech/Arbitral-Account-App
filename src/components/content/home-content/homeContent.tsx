import * as S from "./style.js";
import { accounts, accountsData } from "../../../global/mockData.js";
import { NavLink } from "react-router-dom";

export const HomeContent: React.FC = () => {
  const go = (item: object) => {
    console.log(item);
  };
  return (
    <S.Container>
      <S.Main>
        <S.HomeWrapper>
          <h1>ДОБРО ПОЖАЛОВАТЬ В LOGO </h1>
          <h2>МАГАЗИН ТОПОВЫХ И КАЧЕСТВЕННЫХ АККАУНТОВ</h2>
          <h2>КУПИТЬ ФАРМ НЕДОРОГО</h2>
          {/* <div>
            <S.Banner>Здесь могла быть Ваша реклама.</S.Banner>
            <S.Banner>Здесь могла быть Ваша реклама.</S.Banner>
            <S.Banner>Здесь могла быть Ваша реклама.</S.Banner>
          </div> */}
          <S.HomeMenuHeader> Аккаунты в наличии</S.HomeMenuHeader>
          <S.ItemContainer>
            {accounts.map(({ id, name }) => (
              <S.Item key={id}>
                <NavLink to={"/account-page"}>{name}</NavLink>
              </S.Item>
            ))}
          </S.ItemContainer>
        </S.HomeWrapper>
      </S.Main>
      {/* <S.ShoppingCartContainer>
        <S.ShoppingCartImg src="/icons/cart2.png"></S.ShoppingCartImg>
      </S.ShoppingCartContainer> */}
    </S.Container>
  );
};
