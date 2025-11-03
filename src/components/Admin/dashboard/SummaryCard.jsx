import React from "react";

export default function SummaryCard({ icon, title, count, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-[#26293c] p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform border-l-4 border-transparent hover:border-blue-400`}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${color} text-white text-2xl mb-3`}
      >
        {icon}
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold text-blue-400">{count}</p>
      <p className="text-gray-400 text-sm mt-2">Click to manage {title.toLowerCase()}</p>
    </div>
  );
}
