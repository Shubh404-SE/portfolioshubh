import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div data-aos="fade-up" data-aos-duration="3000"
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 min-h-full"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
        <p className="text-gray-600 text-sm mt-2 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
}