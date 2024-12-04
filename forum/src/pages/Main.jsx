import React, { useEffect, useState } from "react";
import "../main.css";
import { verifyEmail } from "../store/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector((state) => state.auth);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      dispatch(verifyEmail(token))
        .unwrap()
        .then(() => {
          setStatusMessage("Email verified successfully!");
          navigate("/");
        })
        .catch((err) => {
          setStatusMessage("Email verification failed.");
          console.error(err.message);
        });
    }
  }, [dispatch, location, navigate]);
  return (
    <div className="w-screen h-screen light-background bg-background">
      <div className="flex flex-col justify-center h-full">
        <h1>write out your ideas</h1>
        <h2 className="font-light">
          A home for sharing and exploring thoughts.
        </h2>
      </div>
    </div>
  );
}
