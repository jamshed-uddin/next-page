import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header></Header>
      <Outlet />

      <Footer></Footer>
    </div>
  );
};

export default Home;
