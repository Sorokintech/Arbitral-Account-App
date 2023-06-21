import React, { useState } from "react";
import * as S from "./style.js";

export const UserPortalContent = () => {
  // const [data, setData] = useState(false);
  return (
    <S.Container>
      <S.Main>
        <S.UserPortalWrapper>
          <S.UserPortalHeader>Приветствуем, Денис Дорохов!</S.UserPortalHeader>
          <S.ItemContainer>
            {/* <S.Item>Моя информация</S.Item> */}
            <S.Item>Редактировать профиль</S.Item>
            <S.Item>Мои покупки</S.Item>

            {/* <S.Item>Удалить аккаунт</S.Item> */}
          </S.ItemContainer>
        </S.UserPortalWrapper>
      </S.Main>
    </S.Container>
  );
};
