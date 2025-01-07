import React from "react";

export default function StoryCard({
  title,
  description,
  date,
  comments,
  image,
}) {
  return (
    <div className="bg-background dark:bg-dark-background grid grid-cols-1 lg:grid-cols-3 text-justify items-start p-4 border-b border-icon dark:border-dark-icon gap-4">
      <div className="w-80 h-52 md:w-96 col-span-1 lg:hidden flex-shrink-0 mx-auto">
        <img
          src={image}
          alt="Story thumbnail"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-1 col-span-1 grid grid-cols-1 lg:col-span-2 gap-4">
        <span className="text-xl text-text dark:text-dark-text font-semibold col-span-1">
          {title}
        </span>
        <span className="text-text dark:text-dark-text col-span-1 line-clamp-3">
          {description}
        </span>
        <div className="col-span-1 flex items-center text-sm text-text dark:text-dark-text mt-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>
            {comments}{" "}
            <i class="text-icon dark:text-dark-icon fa-solid fa-message"></i>
          </span>
        </div>
      </div>
      <div className="hidden w-52 h-40 xl:w-72 col-span-1 lg:block flex-shrink-0 mx-auto">
        <img
          src={image}
          alt="Story thumbnail"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
}
