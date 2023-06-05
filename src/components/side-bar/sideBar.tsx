import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RegistrationModal } from "../modals/register-modal";
import { accounts, socialLinks } from "../../global/mockData";
import * as S from "./style";
import { DropDownMenu } from "./dropdown";

export const SideBar = () => {
  const [data, setData] = useState(Boolean);
  return (
    <S.Wrapper>
      <S.TopBar>
        <S.ItemContainer>
          <S.LogoWrapper>
            <S.Logo>
              <NavLink to={"/"}>LOGO</NavLink>
            </S.Logo>
          </S.LogoWrapper>

          <S.ItemSection onClick={() => setData(!data)}>
            Аккаунты
            <S.DropDown>
              {data &&
                accounts.map(({ id, name }) => (
                  <S.Item key={id}>
                    <NavLink to={"/account-page"}>{name}</NavLink>
                  </S.Item>
                ))}
            </S.DropDown>
          </S.ItemSection>
          <S.ItemSection>
            <NavLink to={"/security"}>Безопасность</NavLink>
          </S.ItemSection>
          <S.ItemSection>Политика</S.ItemSection>
          <S.ItemSection>Публичная оферта</S.ItemSection>
          <S.ItemSection>FAQ</S.ItemSection>
        </S.ItemContainer>
        <S.ItemContainer>
          <S.ItemSection>
            <NavLink to={"/user-portal"}>Личный Кабинет</NavLink>
          </S.ItemSection>
        </S.ItemContainer>
      </S.TopBar>
    </S.Wrapper>
  );
};
