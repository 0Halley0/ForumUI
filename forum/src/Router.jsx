import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Membership from "./components/Membership";

function Router() {
  return (
    <React.Fragment>
      <Header name="Head Section" />
      <div>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/membership"} element={<Membership />} />
          <Route path={"*"} element={<Navigate to={"*"} />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Router;
