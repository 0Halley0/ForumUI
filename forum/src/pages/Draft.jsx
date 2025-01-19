import React from "react";
import TiptapEditor from "../components/TiptapEditor";

export default function Draft() {
  return (
    <div className="bg-background dark:bg-dark-background h-screen overflow-auto">
      <div className="flex items-end gap-8">
        <h1 className="font-thin text-text dark:text-dark-text">Draft</h1>
        <button className="text-text dark:text-dark-text mb-4">
          <i className="text-2xl fa-solid fa-floppy-disk text-text dark:text-dark-text"></i>
        </button>
      </div>
      <div className="flex items-end gap-2">
        <h2 className="font-thin text-text dark:text-dark-text">Title</h2>
        <button className="text-text dark:text-dark-text mb-1">
          <i className="fa-solid fa-pen-fancy text-text dark:text-dark-text"></i>
        </button>
      </div>
      <div>
        <TiptapEditor />
      </div>
      <div className="flex items-end gap-2 mt-8">
        <h2 className="font-thin text-text dark:text-dark-text">Article</h2>
        <button className="text-text dark:text-dark-text mb-1">
          <i className="fa-solid fa-pen-fancy text-text dark:text-dark-text"></i>
        </button>
      </div>
      <div>
        <TiptapEditor />
      </div>
    </div>
  );
}
