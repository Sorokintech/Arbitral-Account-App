import * as S from "./style";
import { SideBar } from "../components/side-bar/SideBar";
import { AccountContent } from "../components/content/account-content/accountContent";
export const AccountPage = () => {
  return (
    <S.Container>
      <SideBar />
      <AccountContent />
    </S.Container>
  );
};

export default AccountPage;
