import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PortalModal } from "../modals/portal-modal";
import { accounts, socialLinks } from "../../global/mockData";
import * as S from "./style";

export const SideBar = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(Boolean);
  const [user, setUser] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
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
          <S.ItemSection
            onClick={user ? () => navigate("/user-portal") : toggleModal}
          >
            Личный Кабинет
          </S.ItemSection>
          {isOpen ? <PortalModal onClose={toggleModal} /> : ""}
          <S.ShoppingCartContainer onClick={() => navigate("/cart")}>
            <S.ShoppingCartImg src="/icons/cart2.png"></S.ShoppingCartImg>
            <S.ShoppingCartAmount>1</S.ShoppingCartAmount>
          </S.ShoppingCartContainer>
        </S.ItemContainer>
      </S.TopBar>
    </S.Wrapper>
  );
};
