import * as S from "./style";
import React from "react";
import { ModalProps } from "../../../global/types";

export const PortalModal: React.FC<ModalProps> = ({ onClose }) => {
  const [login, setLogin] = React.useState(false);
  const [reg, setReg] = React.useState(false);
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };
  return (
    <S.Container>
      <S.Wrapper ref={overlayRef} onClick={handleOverlayClick}>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Личный кабинет</S.ModalTitle>
            {!login && !reg ? (
              <S.LoginBtn onClick={() => setLogin(!login)}>Войти</S.LoginBtn>
            ) : (
              ""
            )}
            {login && (
              <>
                <S.LoginLabel>
                  <S.LoginUser type="text" placeholder="E-mail"></S.LoginUser>
                  <S.LoginPassword
                    type="text"
                    placeholder="Пароль"
                  ></S.LoginPassword>
                </S.LoginLabel>
                <S.LoginBtn>Войти</S.LoginBtn>
              </>
            )}
            {!login && !reg ? (
              <S.RegisterBtn onClick={() => setReg(!reg)}>
                Зарегистрироваться
              </S.RegisterBtn>
            ) : (
              ""
            )}
            {reg && (
              <>
                <S.LoginLabel>
                  <S.LoginUser type="text" placeholder="E-mail"></S.LoginUser>
                  <S.LoginPassword
                    type="text"
                    placeholder="Пароль"
                  ></S.LoginPassword>
                  <S.LoginPasswordRepeat
                    type="text"
                    placeholder="Повторите пароль"
                  ></S.LoginPasswordRepeat>
                </S.LoginLabel>
                <S.RegisterBtn>Зарегистрироваться</S.RegisterBtn>
              </>
            )}
          </S.ModalContent>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  );
};
