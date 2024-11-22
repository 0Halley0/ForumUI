import React, { useState}  from "react";
import "../main.css";

export default function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement submission logic here
      console.log("Form submitted: ", formData);
    };
  return (
    <div className="w-screen h-screen">
      {/* Top Section */}
      <div className="top-background bg-background h-1/4 w-full">
        <div className="sm:w-2/3 lg:w-2/3 xl:w-1/3 text-justify ml-auto mr-auto pt-8">
          <p className="text-black text-5xl sm:text-8xl mt-16 font-light">
            contact
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-background bg-dark-background h-3/4 w-full">
        <div className="sm:w-2/3 lg:w-2/3 xl:w-1/3 text-justify ml-auto mr-auto sm:pt-8">
          <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-4">
            <label className="text-white">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full p-2 mt-1 text-black rounded-md"
                required
              />
            </label>
            <label className="text-white">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 mt-1 text-black rounded-md"
                required
              />
            </label>
            <label className="text-white">
              Subject:
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full p-2 mt-1 text-black rounded-md"
              />
            </label>
            <label className="text-white">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full p-2 mt-1 text-black rounded-md"
                rows="4"
                required
              />
            </label>
            <button
              type="submit"
              className="w-fit ml-auto bg-goldenRod hover:bg-gold text-black hover:text-darkPurple transition duration-200 py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
