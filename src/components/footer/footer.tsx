import * as S from "./style";
import { socialLinks } from "../../global/mockData";

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
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
