import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { Footer } from "../components/footer/footer";
import { OfferContent } from "../components/content/offer-content/offerContent";
export const OfferPage = () => {
  return (
    <S.Container>
      <SideBar />
      <OfferContent />
      <Footer />
    </S.Container>
  );
};

export default OfferPage;
