import React, { useState } from "react";
import TiptapEditor from "../components/TiptapEditor";
import { useDispatch } from "react-redux";
import { createArticle } from "../store/articleSlice";

export default function Draft() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty!");
      return;
    }
    dispatch(createArticle({ title, content }))
      .unwrap()
      .then(() => alert("Article created successfully!"))
      .catch((error) => alert(`Failed to create article: ${error}`));
  };

  return (
    <div className="bg-background dark:bg-dark-background h-screen overflow-auto">
      <div className="flex items-end gap-8">
        <h1 className="font-thin text-text dark:text-dark-text">Draft</h1>
        <button
          onClick={handleSave}
          className="text-text dark:text-dark-text mb-4"
        >
          <i className="text-2xl fa-solid fa-floppy-disk text-text dark:text-dark-text"></i>
        </button>
      </div>
      <div className="flex items-end gap-2">
        <h2 className="font-thin text-text dark:text-dark-text">Title</h2>
        <button className="text-text dark:text-dark-text mb-1">
          <i className="fa-solid fa-pen-fancy text-text dark:text-dark-text"></i>
        </button>
      </div>
      <div className="lg:mx-28 mx-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the article title"
          className=" w-full text-xl pl-6 font-semibold text-text dark:text-dark-text rounded-lg bg-draftPaperBackground dark:bg-dark-draftPaperBackground border-none placeholder-gray-400  focus:outline-none focus:border-text focus:ring-2 focus:ring-text dark:focus:ring-dark-text"
        />
      </div>
      <div className="flex items-end gap-2 mt-8">
        <h2 className="font-thin text-text dark:text-dark-text">Article</h2>
        <button className="text-text dark:text-dark-text mb-1">
          <i className="fa-solid fa-pen-fancy text-text dark:text-dark-text"></i>
        </button>
      </div>
      <div>
        <TiptapEditor setContent={setContent} />
      </div>
    </div>
  );
}
