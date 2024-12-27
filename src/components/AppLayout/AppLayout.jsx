import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

function AppLayout() {
  return (
    <div className="w-full text-center">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export default AppLayout;
