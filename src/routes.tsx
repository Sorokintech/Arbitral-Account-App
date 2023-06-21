import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { AccountPage } from "./pages/accountPage";
import { UserPortal } from "./pages/userPortal";
import { SecurityPage } from "./pages/securityPage";
import { CartPage } from "./pages/cartPage";
import PolicyPage from "./pages/policyPage";
import OfferPage from "./pages/offerPage";
import FaqPage from "./pages/faqPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account-page" element={<AccountPage />} />
      <Route path="/user-portal" element={<UserPortal />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  );
};
