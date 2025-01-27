import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 bg-background dark:bg-dark-background">
      <div className="w-full h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-right-to-left"></div>
      <div className="w-full h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-left-to-right"></div>
      <div className="w-full h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-left-to-right"></div>
      <div className="w-full mt-32 h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-right-to-left"></div>

      <div className="my-32">
        <i className="fa-solid fa-scroll fa-flip text-8xl text-icon dark:text-dark-icon"></i>
      </div>
      <div className="w-full h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-left-to-right"></div>
      <div className="w-full h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-right-to-left"></div>
      <div className="w-full h-1 border-t-2 border-dashed border-icon dark:border-dark-icon animate-left-to-right"></div>
    </div>
  );
}
