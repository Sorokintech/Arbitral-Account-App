import React from "react";
import { AppRoutes } from "./routes";
import { useDispatch } from "react-redux";
import { accountsData } from "./global/mockData";
import { actions as accountActions } from "./store/slices/account-category.slice.js";
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    accountsData.forEach((x) => {
      dispatch(accountActions.setCategory(x));
    });
  }, [accountsData]);
  return <AppRoutes />;
}

export default App;
