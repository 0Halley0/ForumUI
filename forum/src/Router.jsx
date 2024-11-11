import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function Router() {
  return (
    <React.Fragment>
      <Header name="Head Section" />
      <div>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"*"} element={<Navigate to={"*"} />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Router;
