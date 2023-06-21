import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { FaqContent } from "../components/content/faq-content/faqContent";
import { Footer } from "../components/footer/footer";
export const FaqPage = () => {
  return (
    <S.Container>
      <SideBar />
      <FaqContent />
      <Footer />
    </S.Container>
  );
};

export default FaqPage;
