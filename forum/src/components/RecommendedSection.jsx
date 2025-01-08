import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RecommendedSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const navigate = useNavigate();
  const recommendedStories = [
    {
      id: 1,
      name: "Name Surname",
      title: "Title of the story lorem ipsum",
      image:
        "https://fastly.picsum.photos/id/838/200/200.jpg?hmac=a2ZUJPqhEFH-OzhHFaKdtDdV2XnIE7t1tP2iXnP5Fj0",
    },
    {
      id: 2,
      name: "Name Surname",
      title: "Title of the story lorem ipsum",
      image:
        "https://fastly.picsum.photos/id/428/2529/1581.jpg?hmac=FmX3-15B3BDpSiq3wq-eiTuAZ51CdKcJwrDeRICFCIU",
    },
    {
      id: 3,
      name: "Name Surname",
      title: "Title of the story lorem ipsum",
      image:
        "https://fastly.picsum.photos/id/433/4752/3168.jpg?hmac=Og-twcmaH_j-JNExl5FsJk1pFA7o3-F0qeOblQiJm4s",
    },
  ];

  const tags = [
    "Tag1",
    "Tag2",
    "Long Tag3",
    "Tag4",
    "Tag5",
    "Really Long Tag6",
    "Tag7",
    "Tag8",
  ];

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="h-screen text-dark-text recommend-section-background bg-dark-background border-l border-icon dark:border-dark-icon p-4">
      <div className="flex justify-between mt-16 gap-2">
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full pl-4 rounded-full border border-black bg-white text-text focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 items-center">
        <button
          onClick={() => navigate("/library")}
          className="hover:bg-gold text-buttonText hover:text-darkPurple transition duration-200 px-4 py-1 rounded"
        >
          <i class="fa-regular fa-bookmark"></i> Library
        </button>
        <button
          onClick={() => navigate("/draft")}
          className="hover:bg-gold text-buttonText hover:text-darkPurple transition duration-200 px-4 py-1 rounded"
        >
          <i class="fa-regular fa-pen-to-square"></i> Write
        </button>
        <button
          onClick={() => navigate("/stories")}
          className="hover:bg-gold text-buttonText hover:text-darkPurple transition duration-200 px-4 py-1 rounded"
        >
          <i class="fa-solid fa-book-bookmark"></i> Stories
        </button>
      </div>

      {debouncedQuery && (
        <div className="mt-4">
          <h3>Results for {debouncedQuery}</h3>
        </div>
      )}

      <div className="mt-4">
        <h4>Our Picks</h4>
        <ul>
          {recommendedStories.map((story) => (
            <li key={story.id} className="m-4">
              <div className="flex items-center">
                <img
                  src={story.image}
                  alt={`${story.name}'s story`}
                  className="w-12 h-12 rounded-full"
                />
                <span className="mx-2 font-light">{story.name}</span>
              </div>
              <span className="text-sm font-light text-dark-text">
                {story.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h4>Recommended Topics</h4>
        <div className="flex flex-wrap mx-2 mt-4 gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 border-double border-4 border-black  bg-signinPopupBg text-text rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
