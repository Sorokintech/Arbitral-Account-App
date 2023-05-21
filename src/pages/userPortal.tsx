import * as S from "./style";
import { SideBar } from "../components/side-bar/SideBar";
import { UserPortalContent } from "../components/content/user-portal-content/userPortalContent";
export const UserPortal = () => {
  return (
    <S.Container>
      <SideBar />
      <UserPortalContent />
    </S.Container>
  );
};

export default UserPortal;
