import React from "react";

export default function Profile() {
  return (
    <div className="w-screen h-screen">
      <div className="top-background bg-background h-1/4 w-full pt-12">
        <div className="w-36 h-36 md:w-40 md:h-40 flex-shrink-0 mx-auto">
          <img
            src="https://fastly.picsum.photos/id/50/4608/3072.jpg?hmac=E6WgCk6MBOyuRjW4bypT6y-tFXyWQfC_LjIBYPUspxE"
            alt="Story thumbnail"
            className="w-full h-full border-double border-4 border-black object-cover rounded-full"
          />
        </div>
      </div>
      <div className="bottom-background bg-dark-background h-3/4 relative w-full">
        <div className="md:hidden text-center pt-8 gap-4 grid grid-cols-1 text-dark-text">
          <div className="col-span-1 text-lg font-thin">
            <span>
              Username{" "}
              <button className="text-text dark:text-dark-text ml-2 mb-1">
                <i className="fa-solid fa-pencil text-dark-text"></i>
              </button>
            </span>
            <p className="font-thin text-4xl">0Halley0</p>
          </div>

          <div className="col-span-1 text-lg font-thin">
            <span>
              Email{" "}
              <button className="text-text dark:text-dark-text ml-2 mb-1">
                <i className="fa-solid fa-pencil text-dark-text"></i>
              </button>
            </span>
            <p className="font-thin text-4xl">hello@mail.com</p>
          </div>
        </div>
        <div className="hidden md:block text-dark-text absolute inset-x-1/3 inset-y-0 border-l border-gold lg:ml-8 pt-12 pl-4 w-1/3">
          <div className="grid grid-cols-2 justify-items-start ">
            <span className="col-span-1 text-lg font-thin">
              Username{" "}
              <button className="text-text dark:text-dark-text ml-2 mb-1">
                <i className="fa-solid fa-pencil text-dark-text"></i>
              </button>
            </span>
            <span className="col-span-1 font-thin text-2xl">0Halley0</span>
          </div>
          <div className="grid grid-cols-2 justify-items-start pt-4">
            <span className="col-span-1 text-lg font-thin">
              Email{" "}
              <button className="text-text dark:text-dark-text ml-2 mb-1">
                <i className="fa-solid fa-pencil text-dark-text"></i>
              </button>
            </span>
            <span className="col-span-1 font-thin text-2xl">hale@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
