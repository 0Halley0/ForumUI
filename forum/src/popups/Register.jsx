import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register({ onSwitchToSignin, onClose }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const toggleRememberMe = () => setRememberMe((prev) => !prev);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    try {
      await dispatch(signUp({ email })).unwrap();
      alert("Registration successful!");
      onClose();
      navigate("/verify-email", { state: { email } });
    } catch (err) {
      alert(`Registration failed: ${err}`);
    }
  };
  return (
    <div className="flex flex-col p-4 items-center justify-center h-fit bg-signinPopupBg dark:bg-dark-signinPopupBg rounded-lg">
      <p className="text-2xl text-text dark:text-dark-text font-semibold">
        Register
      </p>
      <button className="bg-zinc-100 dark:bg-zinc-700 hover:bg-darkPurple dark:hover:bg-gold text-text dark:text-dark-text hover:text-white dark:hover:text-darkPurple transition duration-200 py-2 w-full rounded-full">
        Continue with Google
      </button>

      <form onSubmit={handleSubmit} className="mt-8">
        <div>
          <label className="text-text dark:text-dark-text font-semibold">
            Continue with email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded p-2 mt-2 bg-zinc-100 dark:bg-zinc-700 dark:text-white"
          />
        </div>
        <div className="mt-4">
          <input
            className="form-checkbox text-text bg-gray-100 border-gray-300 rounded focus:ring-text dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gold dark:ring-offset-gray-900"
            type="checkbox"
            id="remember-me"
          />
          <label className="text-text dark:text-dark-text font-semibold ml-2">
            Remember me
          </label>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          disabled={loading || !email}
          className="w-full bg-black dark:bg-goldenRod hover:bg-darkPurple dark:hover:bg-gold text-buttonText dark:text-black hover:text-gold dark:hover:text-darkPurple transition duration-200 p-2 mt-8 rounded"
        >
          {loading ? "Registering..." : "Sign up"}
        </button>
      </form>

      <p className="text-sm mt-4 dark:text-gray-300">
        Already have an account?{" "}
        <span
          onClick={onSwitchToSignin}
          className="text-goldenRod cursor-pointer hover:underline"
        >
          Sign in
        </span>
      </p>
    </div>
  );
}
