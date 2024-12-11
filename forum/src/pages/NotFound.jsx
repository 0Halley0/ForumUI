import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Top Background Section */}
      <div className="top-background bg-background h-1/4 w-full flex items-center justify-center">
        <div className="sm:w-2/3 lg:w-2/3 xl:w-1/3 text-justify">
          <p className="text-black text-5xl sm:text-8xl mt-16 font-light"></p>
        </div>
      </div>

      {/* Bottom Background Section */}
      <div className="bottom-background bg-dark-background h-3/4 w-full flex flex-col items-center justify-center">
        <span className="text-9xl text-goldenRod font-bold">404</span>
        <span className="text-5xl md:text-9xl text-goldenRod font-light mt-4">
          not found
        </span>
      </div>
    </div>
  );
}
