import React from 'react'
import "../main.css";

export default function Membership() {
  return (
    <div className="min-w-screen min-h-screen h-full dark-background bg-dark-background">
      <div className="sm:w-2/3 lg:w-2/3 xl:w-1/3 text-justify ml-auto mr-auto pt-8">
        <p className="text-white text-5xl sm:text-8xl mt-16 font-light">
          membership
        </p>
        <div className="flex gap-4 p-4">
          <span className="text-white text-5xl mt-8">1</span>
          <span className="text-white mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque enim erat, gravida id lobortis sit amet, pulvinar
            mollis dui. Duis elementum risus tellus, ac suscipit metus facilisis
            sed. Donec porta turpis lobortis pretium auctor.
          </span>
        </div>
        <div className="flex gap-4 p-4">
          <span className="text-white text-5xl mt-8">2</span>
          <span className="text-white mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque enim erat, gravida id lobortis sit amet, pulvinar
            mollis dui. Duis elementum risus tellus, ac suscipit metus facilisis
            sed. Donec porta turpis lobortis pretium auctor.
          </span>
        </div>
      </div>
    </div>
  );
}
