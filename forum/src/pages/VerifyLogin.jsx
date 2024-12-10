import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginVerify, signIn } from "../store/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import "../main.css";

export default function VerifyLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const hasVerified = useRef(false);
  const { loading, error } = useSelector((state) => state.auth);
  const [statusMessage, setStatusMessage] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token && !hasVerified.current) {
      hasVerified.current = true;
      dispatch(loginVerify(token))
        .unwrap()
        .then(() => {
          setStatusMessage("Email verified successfully!");
        })
        .catch((err) => {
          setStatusMessage("Email verification failed.");
          console.error(err);
        });
    }
  }, [dispatch, location, navigate]);
  const handleResendEmail = () => {
    if (email) {
      dispatch(signIn({ email }))
        .unwrap()
        .then(() => {
          setStatusMessage("Verification email resent!");
        })
        .catch((err) => {
          setStatusMessage(
            "A user with this email already exists. Don't forget to check your spam folder."
          );
          console.error(err);
        });
    }
  };
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
            Please check your email at <b>{email}</b> and click the link to log
            in to your account.
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className=" bg-black dark:bg-goldenRod hover:bg-darkPurple dark:hover:bg-gold text-buttonText dark:text-black hover:text-gold dark:hover:text-darkPurple transition duration-200 py-2 px-5 rounded-full"
          >
            Back to Home Page
          </button>
          <span className="text-text dark:text-dark-text">
            Didn't receive any e-mail?
            <button
              onClick={handleResendEmail}
              className="ml-2 text-goldenRod cursor-pointer hover:underline"
            >
              Send Again
            </button>
          </span>
        </div>
        {statusMessage && (
          <p className="text-center mt-4 text-red-500">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}
