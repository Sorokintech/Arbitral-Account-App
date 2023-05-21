import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { AccountPage } from "./pages/accountPage";
import { UserPortal } from "./pages/userPortal";
import { SecurityPage } from "./pages/securityPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account-page" element={<AccountPage />} />
      <Route path="/user-portal" element={<UserPortal />} />
      <Route path="/security" element={<SecurityPage />} />
    </Routes>
  );
};
