import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RegistrationModal } from "../modals/register-modal";
import { accounts, socialLinks } from "../../global/mockData";
import * as S from "./style";

export const SideBar = () => {
  // const ref = useRef();
  // function useOnClickOutside(ref, handler) {
  //   useEffect(
  //     () => {
  //       const listener = (event: HTMLElement) => {
  //         if (!ref.current || ref.current.contains(event.target)) {
  //           return;
  //         }
  //         handler(event);
  //         document.body.style.removeProperty('overflow');
  //       };
  //       document.addEventListener("mousedown", listener);
  //       document.addEventListener("touchstart", listener);
  //       return () => {
  //         document.removeEventListener("mousedown", listener);
  //         document.removeEventListener("touchstart", listener);
  //       };
  //     },
  //     [ref, handler]
  //   );
  // }
  // useOnClickOutside(ref, () => setModal(false));
  // const toggleModal = () => {
  //   setModal(!modal)
  //   document.body.style.overflow = 'hidden';
  // }

  const AccountsDroppingMenu = () => {
    setData(!data);
  };
  const [data, setData] = useState(Boolean);
  return (
    <S.Wrapper>
      <S.LogoMenuWrapper>
        <S.Logo>
          <NavLink to={"/"}>LOGO</NavLink>
        </S.Logo>
        {/* <S.BurgerMenu>
          <div></div>
          <div></div>
          <div></div>
        </S.BurgerMenu> */}
      </S.LogoMenuWrapper>
      <S.SideBar>
        <S.ItemContainer>
          <S.ItemSection onClick={AccountsDroppingMenu}>
            Категории
            {data &&
              accounts.map(({ id, name }) => (
                <S.Item key={id}>
                  <NavLink to={"/account-page"}>{name}</NavLink>
                </S.Item>
              ))}
          </S.ItemSection>
          <S.ItemSection>
            <NavLink to={"/user-portal"}>Личный Кабинет</NavLink>
          </S.ItemSection>
          <S.ItemSection>
            <NavLink to={"/security"}>Безопасность</NavLink>
          </S.ItemSection>
          <S.ItemSection>Политика</S.ItemSection>
          <S.ItemSection>Публичная оферта</S.ItemSection>
          <S.ItemSection>FAQ</S.ItemSection>
        </S.ItemContainer>

        <S.Links>
          {socialLinks.map(({ id, icon }) => (
            <S.Icon key={id} src={icon}></S.Icon>
          ))}
        </S.Links>
      </S.SideBar>
    </S.Wrapper>
  );
};
