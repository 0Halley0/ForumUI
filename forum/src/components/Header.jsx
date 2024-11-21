import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import "../main.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-background dark:bg-dark-background border-b border-black flex justify-between align-middle gap-4 p-4 w-screen">
      <h1
        onClick={() => navigate("/")}
        className="text-5xl cursor-pointer font-extralight text-logo dark:text-dark-logo"
      >
        scroll
      </h1>

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
      <div className="hidden sm:flex gap-4 align-middle">
        <button
          onClick={toggleTheme}
          className="text-logo dark:text-dark-logo px-3 rounded"
        >
          <i className="fa-solid fa-circle-half-stroke text-xl"></i>
        </button>
        <button
          onClick={() => navigate("/about")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          About
        </button>
        <button
          onClick={() => navigate("/membership")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Membership
        </button>
        <button className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200">
          Sign in
        </button>
        <button className="bg-black dark:bg-goldenRod hover:bg-darkPurple dark:hover:bg-gold text-buttonText dark:text-black hover:text-gold dark:hover:text-darkPurple transition duration-200 p-2 rounded">
          Register
        </button>
      </div>

      {/* Sliding Menu */}
      {menuOpen && (
        <div
          className={`fixed top-20 left-0 w-full h-fit bg-background dark:bg-dark-background p-4 transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu Links */}
          <ul className="flex flex-col  gap-4">
            <li
              onClick={() => navigate("/about")}
              className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              About
            </li>
            <li
              onClick={() => navigate("/membership")}
              className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
            >
              Membership
            </li>
            <li className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200">
              Sign in
            </li>
            <li className="bg-black dark:bg-goldenRod hover:bg-darkPurple dark:hover:bg-gold text-buttonText dark:text-black hover:text-gold dark:hover:text-darkPurple transition duration-200 p-2 rounded">
              Register
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
