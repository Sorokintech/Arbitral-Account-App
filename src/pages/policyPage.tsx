import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { Footer } from "../components/footer/footer";
import { PolicyContent } from "../components/content/policy-content/policyContent";
export const PolicyPage = () => {
  return (
    <S.Container>
      <SideBar />
      <PolicyContent />
      <Footer />
    </S.Container>
  );
};

export default PolicyPage;
