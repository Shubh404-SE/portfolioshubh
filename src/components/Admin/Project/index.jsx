import React, { useEffect, useState } from "react";
import AddEditProject from "./AddEditModel";
import ProjectCard from "./ProjectCard";
import ProjectList from "../../../components/Pages/Project/ProjectList"

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);

//   Fatch all projects
  useEffect(()=>{
    setProjects(ProjectList);
  }, []);
  const handleAddProject = (newProj) => {
    setProjects((prev) => [...prev, { ...newProj, id: Date.now() }]);
    // post /project API call can be made here
  };

  const handleEditProject = (updatedProj) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProj.id ? updatedProj : p))
    );
    // Put /projects/:id API call can be made here
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
    // Delete /projects/:id API call can be made here
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
          <ProjectCard
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
        <AddEditProject
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddProject}
          onEdit={handleEditProject}
          editData={editProject}
        />
      )}
    </div>
  );
}