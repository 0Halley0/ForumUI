import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex gap-4 p-4">
      <span className="text-primary dark:text-dark-text">Header</span>
      <button
        onClick={toggleTheme}
        className="bg-primary text-white px-3 py-1 rounded dark:bg-dark-primary dark:text-dark-text"
      >
        <i className="fa-solid fa-circle-half-stroke"></i>
      </button>
    </div>
  );
}
