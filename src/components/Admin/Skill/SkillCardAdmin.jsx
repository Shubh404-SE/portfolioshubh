import React from "react";
import { techIcons } from "../../../utils/skillIcons";

export default function SkillCardAdmin({ skill, onEdit, onDelete }) {
  const { language, percentage} = skill;

  const IconComponent = techIcons[language];

  return (
    <div className="bg-[#26293c] hover:bg-[#2e3246] p-5 rounded-xl shadow-lg flex flex-col items-center justify-between transition-all duration-300">
      <div className="flex flex-col items-center">
        <div className="relative mb-3">
          <svg className="w-24 h-24">
            <circle
              className="text-gray-700"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="48"
              cy="48"
            />
            <circle
              className="text-blue-400"
              strokeWidth="6"
              strokeDasharray="226"
              strokeDashoffset={226 - (percentage / 100) * 226}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="36"
              cx="48"
              cy="48"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {IconComponent}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-blue-400">{language}</h3>
        <p className="text-sm text-gray-300 mt-1">{percentage}% proficiency</p>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onEdit(skill)}
          className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm font-semibold"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(skill._id)}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
