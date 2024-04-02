import React, { useState } from "react";
import { IoSchoolOutline } from "react-icons/io5";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full min-h-100 mb-10 mt-6 relative">
      <div className="w-[80%] mx-auto container">
        <h1 className="mb-10 text-4xl text-center">About page</h1>
        <div
          className="relative flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="w-[50%] rounded-md cursor-pointer"
            src="https://w0.peakpx.com/wallpaper/104/998/HD-wallpaper-workplace-writer-concepts-journalist-workplace-journalism-concepts-typewriter-notebook.jpg"
            alt=""
          />
          <p
            className={`absolute left-0 right-0 text-center text-white text-2xl px-4 py-2 bg-opacity-50 transition-all duration-500 ${
              isHovered ? "top-0 opacity-200" : "bottom-0 opacity-0"
            }`}
          >
            <IoSchoolOutline className="inline-block mr-2 text-8xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
