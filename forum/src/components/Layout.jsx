// src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Signin from "../popups/Signin";
import Register from "../popups/Register";
import ForumHeader from "./ForumHeader";
import { useSelector } from "react-redux";

const Layout = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = Boolean(token);

  return (
    <div className="flex flex-col min-h-screen">
      {isAuthenticated ? (
        <ForumHeader />
      ) : (
        <Header
          onSignIn={() => setShowSignin(true)}
          onRegister={() => setShowRegister(true)}
        />
      )}
      <main className="flex-grow overflow-x-hidden scrollbar-hide">
        <Outlet />
      </main>
      <Footer onSignIn={() => setShowSignin(true)} />

      {/* Overlay for Signin */}
      {showSignin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Signin
            onSwitchToRegister={() => {
              setShowSignin(false);
              setShowRegister(true);
            }}
            onClose={() => setShowSignin(false)}
          />

          <button
            onClick={() => setShowSignin(false)}
            className="absolute top-20 right-5 "
          >
            <i className="fa-solid fa-xmark text-white text-2xl"></i>
          </button>
        </div>
      )}

      {/* Overlay for Register */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <Register
            onSwitchToSignin={() => {
              setShowRegister(false);
              setShowSignin(true);
            }}
            onClose={() => setShowRegister(false)}
          />

          <button
            onClick={() => setShowRegister(false)}
            className="absolute top-20 right-5"
          >
            <i className="fa-solid fa-xmark text-white text-2xl"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
