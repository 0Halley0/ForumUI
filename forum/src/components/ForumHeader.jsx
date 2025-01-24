import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import "../main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function ForumHeader() {
  const { toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleAvatarMenu = () => {
    setAvatarMenuOpen((prev) => !prev);
  };
  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="bg-background dark:bg-dark-background border-b border-icon dark:border-dark-icon flex justify-between align-middle p-4 w-screen z-10">
      <span
        onClick={() => navigate("/forum")}
        className="text-5xl ml-4 cursor-pointer font-extralight text-logo dark:text-dark-logo"
      >
        scroll
      </span>

      {/* Mobile Menu Buttons */}
      <div className="sm:hidden flex gap-4 align-middle">
        <button
          onClick={toggleTheme}
          className="text-logo dark:text-dark-logo px-1 rounded"
        >
          <i className="fa-solid fa-circle-half-stroke text-xl"></i>
        </button>
        <button
          onClick={toggleMenu}
          className="text-logo dark:text-dark-logo px-1 rounded"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      {/* Desktop Navigation Buttons*/}
      <div className="hidden sm:flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className="text-logo dark:text-dark-logo px-3 rounded"
        >
          <i className="fa-solid fa-circle-half-stroke text-xl"></i>
        </button>
        <button
          onClick={() => navigate("/forum")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Forum
        </button>
        <button
          onClick={() => navigate("/library")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Library
        </button>
        <button
          onClick={() => navigate("/stories")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Story
        </button>
        <button
          onClick={() => navigate("/draft")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Write
        </button>
        <div className="relative">
          <img
            src="https://fastly.picsum.photos/id/604/2511/1671.jpg?hmac=qQdbqdkMM7xoygyzrtpRd5T4ffKmBqc1HNaiE-VIPNY"
            alt="Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleAvatarMenu}
          />
          {avatarMenuOpen && (
            <div className="absolute right-0 top-14 bg-background dark:bg-dark-background rounded-b-lg w-36">
              <div className="grid justify-items-stretch divide-y divide-icon dark:divide-dark-icon p-2 gap-2">
                <div
                  onClick={() => navigate("/profile")}
                  className=" text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold cursor-pointer"
                >
                  Profile
                </div>
                <div
                  onClick={() => navigate("/settings")}
                  className="pt-2 text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold cursor-pointer"
                >
                  Settings
                </div>
                <div
                  onClick={handleLogout}
                  className="pt-2 text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold cursor-pointer"
                >
                  Log Out
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sliding Menu */}
      {menuOpen && (
        <div
          className={`fixed top-20 left-0 w-full h-fit bg-background dark:bg-dark-background p-4 transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Links */}
          <div className="flex flex-col  gap-4">
            <div
              onClick={() => navigate("/forum")}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Forum
            </div>
            <div
              onClick={() => navigate("/library")}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Library
            </div>
            <div
              onClick={() => navigate("/stories")}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Story
            </div>
            <div
              onClick={() => navigate("/draft")}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Write
            </div>
            <div
              onClick={() => navigate("/profile")}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Profile
            </div>
            <div
              onClick={() => navigate("/settings")}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Settings
            </div>
            <div
              onClick={handleLogout}
              className="text-center text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Log Out
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
