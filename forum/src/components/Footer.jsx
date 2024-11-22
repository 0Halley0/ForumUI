import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
  return (
    <div className="bg-background dark:bg-dark-background border-t border-black w-screen">
      {/* Desktop Navigation Buttons*/}
      <div className="hidden sm:flex justify-center align-middle gap-16 p-4">
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
        <button
          onClick={() => navigate("/contact")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Contact
        </button>
        <button className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200">
          Sign in
        </button>
        <button
          onClick={() => navigate("/terms-and-privacy")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Terms and Privacy
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="sm:hidden flex flex-col p-4">
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
        <button
          onClick={() => navigate("/contact")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Contact
        </button>
        <button className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200">
          Sign in
        </button>
        <button
          onClick={() => navigate("/terms-and-privacy")}
          className="text-text dark:text-dark-text hover:text-goldenRod dark:hover:text-gold transition duration-200"
        >
          Terms and Privacy
        </button>
      </div>
    </div>
  );
}
