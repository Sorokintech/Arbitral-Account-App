import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { UserPortalContent } from "../components/content/user-portal-content/userPortalContent";
import { Footer } from "../components/footer/footer";
export const UserPortal = () => {
  return (
    <S.Container>
      <SideBar />
      <S.Wrapper>
        <UserPortalContent />
        <Footer />
      </S.Wrapper>
    </S.Container>
  );
};

export default UserPortal;
