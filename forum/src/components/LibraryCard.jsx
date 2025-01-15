import React from "react";

export default function LibraryCard({
  title,
  description,
  date,
  comments,
  image,
}) {
  return (
    <div className="col-span-1 mx-auto lg:mx-4 mt-6">
      <div className="max-w-sm h-full  rounded-lg overflow-hidden shadow-lg bg-cardBackground dark:bg-dark-cardBackground">
        <div className="h-56 flex-shrink-0 mx-auto">
          <img
            src={image}
            alt="Story thumbnail"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="my-6 px-4">
          <span className="font-semibold text-xl mb-2 text-dark-text line-clamp-2">
            {title}
          </span>
          <span className="line-clamp-4 font-light text-dark-text text-justify">
            {description}
          </span>
        </div>
        <div className="px-4 mb-6">
          {" "}
          <span className="text-dark-text">{date}</span>
          <span className="mx-2 text-dark-text">•</span>
          <span className="text-dark-text">
            {comments} <i className="text-dark-icon fa-solid fa-message"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
