import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { SecurityContent } from "../components/content/security-content/securityContent";
import { Footer } from "../components/footer/footer";
export const SecurityPage = () => {
  return (
    <S.Container>
      <SideBar />
      <SecurityContent />
      <Footer />
    </S.Container>
  );
};

export default SecurityPage;
