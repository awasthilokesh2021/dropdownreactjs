import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="Backgrnd text-white flex justify-center items-center text-pretty">
      <div className=" md:min-w-[600px] md:mx-10 sm:min-w-[400px] sm:mx-10   lg:min-w-[800px] text-center">
        <h1 className="text-4xl font-bold">Build & Deploy Complete Responsive Website in React</h1>
        <p className="mx-auto mt-2">
          Build & Deploy Complete Responsive Website in ReactBuild & Deploy
          Complete Responsive Website in ReactBuild 
        </p>
        <button className="mt-2 bg-blue-700 px-4 py-2 rounded-full">Explore now</button>
      </div>
    </div>
  );
};

export default Home;
