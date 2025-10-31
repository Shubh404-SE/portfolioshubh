import React, { useState } from "react";
import AddEditProjectModal from "./AddEditProjectModal";
import ProjectCardAdmin from "./ProjectCardAdmin";

export default function AdminProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built using React and TailwindCSS.",
      tags: ["React", "Tailwind", "Frontend"],
      image: "/images/portfolio.png",
      github: "https://github.com/Shubh404-SE/portfolioshubh",
      live: "https://shubham-tanwar.netlify.app/",
    },
    {
      id: 2,
      title: "Blog Platform",
      description: "A modern blogging platform using MERN stack.",
      tags: ["MongoDB", "Express", "React", "Node"],
      image: "/images/blog.png",
      github: "#",
      live: "#",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const handleAddProject = (newProj) => {
    setProjects((prev) => [...prev, { ...newProj, id: Date.now() }]);
  };

  const handleEditProject = (updatedProj) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProj.id ? updatedProj : p))
    );
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1f2f] text-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-400">Manage Projects</h1>
        <button
          onClick={() => {
            setEditProject(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold"
        >
          + Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCardAdmin
            key={project.id}
            project={project}
            onEdit={(proj) => {
              setEditProject(proj);
              setIsModalOpen(true);
            }}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>

      {isModalOpen && (
        <AddEditProjectModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddProject}
          onEdit={handleEditProject}
          editData={editProject}
        />
      )}
    </div>
  );
}