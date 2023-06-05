import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { AccountContent } from "../components/content/account-content/accountContent";
import { Footer } from "../components/footer/footer";
export const AccountPage = () => {
  return (
    <S.Container>
      <SideBar />
      <AccountContent />
      <Footer />
    </S.Container>
  );
};

export default AccountPage;
