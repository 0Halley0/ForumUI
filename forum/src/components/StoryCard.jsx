import React from "react";
import DOMPurify from "dompurify";

export default function StoryCard({
  title,
  description,
  date,
  comments,
  photo_url,
}) {
  const sanitizedDescription = description
    .replace(/<img[^>]*>/g, "")
    .replace(/<\/?p>/g, "")
    .replace(/<\/?div>/g, "")
    .replace(/<\/?code>/g, " ")
    .replace(/<\/?pre>/g, " ")
    .replace(/<\/?li>/g, " ")
    .replace(/<\/?br>/g, " ");
  return (
    <div className="bg-background dark:bg-dark-background grid grid-cols-1 lg:grid-cols-3 text-justify items-start p-4 lg:mx-24 border-b border-icon dark:border-dark-icon gap-4">
      <div className="w-80 h-52 md:w-96 col-span-1 lg:hidden flex-shrink-0 mx-auto">
        <img
          src={photo_url}
          alt="Story thumbnail"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-1 col-span-1 grid grid-cols-1 lg:col-span-2 gap-4">
        <div className="flex justify-between gap-4">
          <span className="line-clamp-2 text-xl text-text dark:text-dark-text font-semibold col-span-1">
            {title}
          </span>
          <button className="hidden md:block text-text dark:text-dark-text">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>

        <div
          className="story-content text-text dark:text-dark-text col-span-1 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(sanitizedDescription),
          }}
        />
        <div className="col-span-1 flex justify-between items-center text-sm text-text dark:text-dark-text mt-2">
          <div>
            {" "}
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>
              {comments}{" "}
              <i className="text-icon dark:text-dark-icon fa-solid fa-message"></i>
            </span>
          </div>
          <div className="flex gap-4 text-text dark:text-dark-text">
            <button>
              <i className="fa-regular fa-bookmark"></i>
            </button>
            <button className="md:hidden">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-52 h-40 xl:w-72 col-span-1 lg:block flex-shrink-0 mx-auto">
        <img
          src={photo_url}
          alt="Story thumbnail"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
}
