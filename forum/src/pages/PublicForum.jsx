import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import RecommendedSection from "../components/RecommendedSection";
import StoryCard from "../components/StoryCard";
import { useDispatch, useSelector } from "react-redux";
import { loginVerify } from "../store/authSlice";
import { fetchArticles } from "../store/articleSlice";

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
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.articles);
  const [showRecommended, setShowRecommended] = useState(false);

  const toggleRecommended = () => {
    setShowRecommended(!showRecommended);
  };
  const stories = articles
    .map((article) => ({
      title: article.title,
      description: article.content,
      date: new Date(article.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
    }))
    .reverse();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row bg-background dark:bg-dark-background">
      <div className="flex justify-end">
        <button
          className="block md:hidden text-text dark:text-dark-text underline rounded m-4"
          onClick={toggleRecommended}
        >
          <i className="fa-solid fa-angles-left px-2"></i>
          {showRecommended ? "Hide Recommendations" : "Show Recommendations"}
        </button>
      </div>

      <div className="flex-1">
        <div className="overflow-auto h-screen">
          {status === "loading" && (
            <div className="flex justify-center items-center h-full">
              <i className="fa-solid fa-scroll fa-flip text-8xl text-icon dark:text-dark-icon"></i>
            </div>
          )}
          {status === "succeeded" &&
            stories.length > 0 &&
            stories.map((story, index) => <StoryCard key={index} {...story} />)}
          {status === "succeeded" && stories.length === 0 && (
            <p className="text-center text-text dark:text-dark-text mt-8">
              No Articles
            </p>
          )}
          {status === "failed" && (
            <p className="text-center text-red-500 mt-8">
              Failed to load articles. Please try again later.
            </p>
          )}
        </div>
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
