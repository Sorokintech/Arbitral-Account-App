import * as S from "./style";
import { SideBar } from "../components/side-bar/SideBar";
import { SecurityContent } from "../components/content/security-content/securityContent";
export const SecurityPage = () => {
  return (
    <S.Container>
      <SideBar />
      <SecurityContent />
    </S.Container>
  );
};

export default SecurityPage;
