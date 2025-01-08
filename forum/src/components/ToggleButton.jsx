import React from "react";

export default function ToggleButton({ options, selectedOption, onToggle }) {
  return (
    <div className="flex gap-8 text-xl mx-28">
      {options.map((option, index) => (
        <button
          key={index}
          className="relative text-text dark:text-dark-text"
          onClick={() => onToggle(option)}
        >
          <span>{option.label}</span>
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full bg-text dark:bg-dark-text transform transition-transform ${
              selectedOption.value === option.value
                ? "scale-x-150"
                : "scale-x-0"
            }`}
            style={{
              transformOrigin: index === 0 ? "right" : "left",
            }}
          ></span>
        </button>
      ))}
    </div>
  );
}
