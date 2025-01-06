import React, { useState } from "react";
import { Transition } from "react-transition-group";
import RecommendedSection from "../components/RecommendedSection";

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: "translateX(100%)",
};

const transitionStyles = {
  entering: { transform: "translateX(0)" },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(100%)" },
  exited: { transform: "translateX(100%)" },
};

export default function PublicForum() {
  const [showRecommended, setShowRecommended] = useState(false);

  const toggleRecommended = () => {
    setShowRecommended(!showRecommended);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-end">
        <button
          className="block md:hidden text-text dark:text-dark-text underline rounded m-4"
          onClick={toggleRecommended}
        >
          <i className="fa-solid fa-angles-left px-2"></i>
          {showRecommended ? "Hide Recommendations" : "Show Recommendations"}
        </button>
      </div>

      <div className="flex-1 p-4">
        <h1>Public Forum</h1>
        <p>Your main forum content goes here.</p>
      </div>

      <div className="hidden md:block md:w-1/3">
        <RecommendedSection />
      </div>

      <Transition in={showRecommended} timeout={duration} unmountOnExit>
        {(state) => (
          <div
            className="md:hidden fixed top-0 right-0 bottom-0 w-full bg-gray-100 shadow-lg"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <button
              className="absolute top-4 right-4"
              onClick={toggleRecommended}
            >
              <i className="fa-solid fa-xmark text-white text-2xl"></i>
            </button>
            <RecommendedSection />
          </div>
        )}
      </Transition>
    </div>
  );
}
