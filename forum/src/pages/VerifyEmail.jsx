import React from "react";
import "../main.css";

export default function VerifyEmail() {
  return (
    <div className="h-screen flex justify-center items-center bg-background dark:bg-dark-background">
      <div className="border border-dashed border-text dark:border-dark-text p-8 mx-4 sm:p-12">
        <div className="text-center pb-8">
          <span className="text-4xl sm:text-5xl text-text dark:text-dark-text">
            Verify Email
          </span>
        </div>
        <div className="text-center py-4">
          <span className=" text-text dark:text-dark-text">
            Click the link we sent to example@email.com to complete your account
            set-up.
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="w-min bg-black dark:bg-goldenRod hover:bg-darkPurple dark:hover:bg-gold text-buttonText dark:text-black hover:text-gold dark:hover:text-darkPurple transition duration-200 py-2 px-5 rounded-full">
            Ok
          </button>
          <span className="text-text dark:text-dark-text">
            Didn't receive any e-mail?
            <button className="ml-2 text-goldenRod cursor-pointer hover:underline">
              Send Again
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
