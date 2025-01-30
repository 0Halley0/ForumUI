import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, partiallyUpdateUserInfo } from "../store/authSlice";
import ProfilePlaceholder from "../assets/images/scroll.webp";

export default function Profile() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const [editable, setEditable] = useState(false);
  const [username, setUsername] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);
      dispatch(partiallyUpdateUserInfo(formData))
        .unwrap()
        .then(() => {
          console.log("Upload successful!");
          dispatch(fetchUserInfo());
        })
        .catch((error) => {
          console.error("Upload failed:", error);
        });
    } else {
      console.error("No file selected");
    }
  };


  const handleSave = () => {
    dispatch(partiallyUpdateUserInfo({ username }));
    setEditable(false);
  };

  return (
    <div className="w-screen h-screen">
      <div className="top-background bg-background h-1/4 w-full pt-12">
        <div
          className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0 mx-auto"
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
        >
          <img
            src={user?.avatar_url || ProfilePlaceholder}
            alt="Profile"
            className="w-full h-full border-double border-4 border-black object-cover rounded-full"
          />
          {showOverlay && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full">
              <label className="text-white cursor-pointer">
                <i className="fa-solid fa-pencil text-dark-text"></i>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="bottom-background bg-dark-background h-3/4 relative w-full">
        <div className="md:hidden text-center pt-8 gap-4 grid grid-cols-1 text-dark-text">
          <div className="col-span-1 text-lg font-thin">
            <span>
              Username{" "}
              <button
                className="text-text dark:text-dark-text ml-2 mb-1"
                onClick={() => setEditable(true)}
              >
                <i className="fa-solid fa-pencil text-dark-text"></i>
              </button>
            </span>
            {editable ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-center bg-transparent text-4xl border-b border-gold w-72 rounded-lg"
              />
            ) : (
              <p className="font-thin text-4xl">
                {loading ? "Loading..." : username || "Username not set"}
              </p>
            )}
          </div>

          <div className="col-span-1 text-lg font-thin">
            <span>Email</span>
            <p className="font-thin text-4xl">
              {loading ? "Loading..." : user?.email || "Email not provided"}
            </p>
          </div>

          {editable && (
            <button
              onClick={handleSave}
              className="mt-4 mx-8 py-2 bg-gold text-black rounded-lg"
            >
              Save
            </button>
          )}
        </div>

        <div className="hidden md:block text-dark-text absolute inset-x-1/3 inset-y-0 border-l border-gold lg:ml-8 pt-12 pl-4 w-1/3">
          <div className="grid grid-cols-2 justify-items-start">
            <span className="col-span-1 text-lg font-thin">
              Username{" "}
              <button
                className="text-text dark:text-dark-text ml-2 mb-1"
                onClick={() => setEditable(true)}
              >
                <i className="fa-solid fa-pencil text-dark-text"></i>
              </button>
            </span>
            <span className="col-span-1 font-thin text-2xl">
              {editable ? (
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-transparent rounded-lg text-2xl border-b border-gold"
                />
              ) : loading ? (
                "Loading..."
              ) : (
                username || "Username not set"
              )}
            </span>
          </div>
          <div className="grid grid-cols-2 justify-items-start pt-4">
            <span className="col-span-1 text-lg font-thin">Email</span>
            <span className="col-span-1 font-thin text-2xl">
              {loading ? "Loading..." : user?.email || "Email not provided"}
            </span>
          </div>

          {editable && (
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-gold text-black rounded-lg"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
