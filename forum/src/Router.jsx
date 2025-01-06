import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import Layout from "./components/Layout";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyLogin from "./pages/VerifyLogin";
import NotFound from "./pages/NotFound";
import PublicForum from "./pages/PublicForum";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-login" element={<VerifyLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default Router;
