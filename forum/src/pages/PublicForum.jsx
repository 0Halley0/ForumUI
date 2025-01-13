import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { loginVerify } from "../store/authSlice";
import { Transition } from "react-transition-group";
import RecommendedSection from "../components/RecommendedSection";
import StoryCard from "../components/StoryCard";

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
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenFromParams = searchParams.get("token");
    const savedAccessToken = localStorage.getItem("accessToken");

    if (!savedAccessToken && tokenFromParams) {
      dispatch(loginVerify(tokenFromParams))
        .unwrap()
        .then(() => {
          console.log("Login verified successfully");
        })
        .catch((err) => {
          console.error("Login verification failed:", err);
        });
    } else if (savedAccessToken) {
      console.log("User is already logged in.");
    }
  }, [dispatch, searchParams]);

  const toggleRecommended = () => {
    setShowRecommended(!showRecommended);
  };
  const stories = [
    {
      title:
        "Title of the story lorem ipsum dolore magna aliqua. Ut enim ad minim veniam",
      description:
        "Lorem Ipsum dolore magna aliqua. Ut enim ad minim veniam, dolore magna aliqua. Ut enim ad minim veniam, is simply dummy text of the printing and typesetting industry...",
      date: "Nov 15",
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    },
    {
      title: "Another interesting story",
      description:
        "This is another example of a story description, dolore magna aliqua. Ut enim ad minim veniam, dolore magna aliqua. Ut enim ad minim veniam, showcasing the StoryCard component.",
      date: "Nov 16",
      comments: 15,
      image:
        "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
    },
    {
      title: "Title of the story lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "Nov 15",
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs",
    },
    {
      title: "Another interesting story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. showcasing the StoryCard component.",
      date: "Nov 16",
      comments: 15,
      image:
        "https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g",
    },
    {
      title: "Title of the story lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "Nov 15",
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
    },
    {
      title: "Another interesting story",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "Nov 16",
      comments: 15,
      image:
        "https://fastly.picsum.photos/id/75/1999/2998.jpg?hmac=0agRZd8c5CRiFvADOWJqfTv6lqYBty3Kw-9LEtLp_98",
    },
    {
      title: "Title of the story lorem ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "Nov 15",
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    },
    {
      title: "Another interesting story",
      description:
        "This is another , qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, example of a story description, showcasing the StoryCard component.",
      date: "Nov 16",
      comments: 15,
      image:
        "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
    },
    {
      title: "Title of the story lorem ipsum",
      description:
        "Lorem Ipsum is simply , qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, dummy text of the printing and typesetting industry...",
      date: "Nov 15",
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs",
    },
    {
      title: "Another interesting story",
      description:
        "This is , qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, another example of a story description, showcasing the StoryCard component.",
      date: "Nov 16",
      comments: 15,
      image:
        "https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g",
    },
    {
      title: "Title of the story lorem ipsum",
      description:
        "Lorem Ipsum is simply , qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, dummy text of the printing and typesetting industry...",
      date: "Nov 15",
      comments: 42,
      image:
        "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
    },
    {
      title: "Another interesting story",
      description:
        "This is another , qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, example of a story description, showcasing the StoryCard component.",
      date: "Nov 16",
      comments: 15,
      image:
        "https://fastly.picsum.photos/id/75/1999/2998.jpg?hmac=0agRZd8c5CRiFvADOWJqfTv6lqYBty3Kw-9LEtLp_98",
    },
  ];

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
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
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
