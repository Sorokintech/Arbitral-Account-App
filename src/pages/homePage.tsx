import { HomeContent } from "../components/content/home-content/homeContent";
import { Footer } from "../components/footer/footer";
import { SideBar } from "../components/side-bar/sideBar";
import * as S from "./style";

export const HomePage = () => {
  return (
    <S.Container>
      <SideBar />
      <HomeContent />
      <Footer />
    </S.Container>
  );
};

export default HomePage;
