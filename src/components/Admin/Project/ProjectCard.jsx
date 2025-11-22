import React from "react";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="bg-[#26293c] p-4 rounded-lg shadow-lg flex flex-col justify-between">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-300 text-sm mb-3 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-auto">
        <button
          onClick={() => onEdit(project)}
          className="text-sm bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded font-semibold"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(project.id)}
          className="text-sm bg-red-500 hover:bg-red-600 px-3 py-1 rounded font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
