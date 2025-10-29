import React from "react";
import { useStateProvider } from "../../../context/StateContext";

export default function FilterDropDown({tags}) {
  const [{activeFilter}, dispatch ]= useStateProvider();

  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => dispatch({ type: "SET_FILTER", payload: tag })}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === tag
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
