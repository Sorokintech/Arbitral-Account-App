import React from "react";
import * as S from "./style";

export const RegistrationModal = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Личный кабинет</S.ModalTitle>
            <S.LoginBtn>Войти</S.LoginBtn>
            <S.RegisterBtn>Зарегистрироваться</S.RegisterBtn>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  );
};
