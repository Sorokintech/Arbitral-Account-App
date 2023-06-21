import * as S from "./style";
import { socialLinks } from "../../global/mockData";
import { useState } from "react";
import { Smile } from "../content/fun-content/funContent";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  function ImgShowLogic() {
    setIsOpen(!isOpen);
    setTimeout(() => setIsOpen(false), 2000);
  }
  return (
    <S.Container>
      <S.Wrapper>
        <S.SmileIcon src="/icons/smile.png" onClick={() => ImgShowLogic()} />
        {isOpen && <Smile />}
        <S.Info>
          <S.InfoItem> © 2023 Logo LLC </S.InfoItem>
        </S.Info>
        <S.Links>
          {socialLinks.map(({ id, icon }) => (
            <S.Icon key={id} src={icon}></S.Icon>
          ))}
        </S.Links>
      </S.Wrapper>
    </S.Container>
  );
};
