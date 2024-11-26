// src/components/Layout.jsx
import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Signin from "../popups/Signin";

const Layout = () => {
   const [showSignin, setShowSignin] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <Header onSignIn={() => setShowSignin(true)} />
      <main className="flex-grow overflow-x-hidden scrollbar-hide">
        <Outlet />
      </main>
      <Footer />

      {/* Overlay for Signin */}
      {showSignin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Signin />
          <button
            onClick={() => setShowSignin(false)}
            className="absolute top-5 right-5 "
          >
            <i className="fa-solid fa-xmark text-white text-2xl"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
