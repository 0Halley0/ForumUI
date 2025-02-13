import React, { useState } from "react";
import TiptapEditor from "../components/TiptapEditor";
import { useDispatch } from "react-redux";
import { createArticle } from "../store/articleSlice";
import ProfilePlaceholder from "../assets/images/scroll.webp";

export default function Draft() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (photo) {
      formData.append("photo", photo);
    }

    dispatch(createArticle(formData))
      .unwrap()
      .then(() => alert("Article created successfully!"))
      .catch((error) => alert(`Failed to create article: ${error}`));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="bg-background dark:bg-dark-background h-screen w-screen overflow-auto">
      <div className="flex items-end gap-8">
        <h1 className="font-thin text-text dark:text-dark-text">Draft</h1>
        <button
          onClick={handleSave}
          className="text-text dark:text-dark-text mb-4"
        >
          <span className="text-2xl text-text dark:text-dark-text pr-2">
            Save
          </span>
          <i className="text-2xl fa-solid fa-floppy-disk text-text dark:text-dark-text"></i>
        </button>
      </div>
      <h2 className="font-thin text-text dark:text-dark-text mt-8">
        Thumbnail
      </h2>
      <div
        className="relative max-w-full lg:w-2/5 lg:h-64 xl:w-1/4 h-64 sm:h-96 mx-6 lg:mx-28"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <img
          src={photoUrl || ProfilePlaceholder}
          alt="Thumbnail"
          className="w-full h-full border-double border-4 border-black object-cover rounded-md"
        />
        {showOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
            <label className="text-white cursor-pointer">
              <i className="fa-solid fa-pencil text-white"></i>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
      </div>

      <div className="flex items-end gap-2 mt-8">
        <h2 className="font-thin text-text dark:text-dark-text">Title</h2>
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
      </div>
      <div className="mb-8">
        <TiptapEditor setContent={setContent} />
      </div>
    </div>
  );
}
