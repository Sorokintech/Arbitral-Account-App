import * as S from "./style";
import { SideBar } from "../components/side-bar/sideBar";
import { CartContent } from "../components/content/cart-content/cart-content";
import { Footer } from "../components/footer/footer";
export const CartPage = () => {
  return (
    <S.Container>
      <SideBar />
      <CartContent />
      <Footer />
    </S.Container>
  );
};

export default CartPage;
