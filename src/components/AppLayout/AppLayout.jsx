import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="w-full text-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
