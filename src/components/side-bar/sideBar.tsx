import * as S from "./style";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PortalModal } from "../modals/portal-modal";
import { MenuItems, accounts } from "../../global/mockData";
import { StateInterface } from "../../global/types";

export const SideBar = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState(Boolean);
  const [mobileMenuOpen, SetMobileMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const CartLogoCounter = useSelector((state: StateInterface) => state["cart"]);

  return (
    <S.Wrapper>
      <S.TopBar>
        <S.ItemContainer>
          <S.LogoWrapper>
            <S.Logo>
              <NavLink to={"/"}>LOGO</NavLink>
            </S.Logo>
            <S.Logo onClick={() => SetMobileMenuOpen(!mobileMenuOpen)}>
              LOGO
            </S.Logo>
            <S.DropDown>
              {mobileMenuOpen &&
                MenuItems.map(({ id, title, nav }) => (
                  <S.Item key={id}>
                    <NavLink to={`${nav}`}>{title}</NavLink>
                  </S.Item>
                ))}
            </S.DropDown>
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
          <S.ItemSection>
            <NavLink to={"/policy"}>Политика</NavLink>
          </S.ItemSection>
          <S.ItemSection>
            <NavLink to={"/offer"}>Публичная оферта</NavLink>
          </S.ItemSection>
          <S.ItemSection>
            <NavLink to={"/faq"}>FAQ</NavLink>
          </S.ItemSection>
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
            <S.ShoppingCartAmount>
              {CartLogoCounter.length}
            </S.ShoppingCartAmount>
          </S.ShoppingCartContainer>
        </S.ItemContainer>
      </S.TopBar>
    </S.Wrapper>
  );
};
