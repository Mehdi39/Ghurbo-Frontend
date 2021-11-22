import React, { useState } from "react";
import Tour from "./Tour";
import Car from "./Car";
import Hotels from "./Hotels";

const Search = () => {
  const [option, setOption] = useState("cruise");

  const btnStyle =
    "border border-lightBlue px-6 py-2 hover:bg-green-600 transition hover:text-white";
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(rgba(255,255,255,.95),rgba(255,255,255,.95))",
        }}
        className="my-container my-3 py-10 px-10 rounded-md shadow-xl"
      >
        <div className="flex items-center">
          <button
            onClick={() => setOption("cruise")}
            className={`border-r-0 ${btnStyle} ${
              option === "cruise" ? "bg-green-500 text-black" : ""
            }`}
          >
            Tours
          </button>
          <button
            onClick={() => setOption("hotel")}
            className={`border-r-0 ${btnStyle} ${
              option === "hotel" ? "bg-green-500 text-black" : ""
            }`}
          >
            Hotel
          </button>
          <button
            onClick={() => setOption("flights")}
            className={`${btnStyle} ${
              option === "flights" ? "bg-green-500 text-black" : ""
            }`}
          >
            Car
          </button>
        </div>

        <div className="mt-6">
          {option === "cruise" ? <Tour /> : ""}
          {option === "hotel" ? <Hotels /> : ""}
          {option === "flights" ? <Car /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Search;
