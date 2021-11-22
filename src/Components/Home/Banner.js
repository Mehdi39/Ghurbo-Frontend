import React from "react";
import "./BannerSytle.css";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-6xl text-white font-bold text-center">
        ✌️ Best Sajek Tour Ever ✌️
        </h1>

        <button className="bg-orange text-white px-8 py-3 mt-4 rounded-lg">
        </button>
      </div>
    </div>
  );
};

export default Banner;
