import React, { useEffect, useState } from "react";
import AddEditProject from "./AddEditModel";
import ProjectCard from "./ProjectCard";
import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../../../utils/Routes.js";
import Alert from "../../Alert/Alert.js";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProject = async (newProj) => {
    setAlert({ show: false, type: "", message: "" });
    try {
      const data = await addProject(newProj);
      if (data?._id) {
        setProjects((prev) => [{ ...newProj, _id: data._id }, ...prev]);
        setAlert({
          show: true,
          type: "success",
          message: "✅ Project added successfully!",
        });
      } else
        console.error("Failed to add project, no ID returned", data.message);
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        message: "⚠️ Something went wrong. Please try again.",
      });
      console.error("Error adding project:", err);
    } finally {
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 3000);
    }
  };

  const handleEditProject = async (updatedProj) => {
    setAlert({ show: false, type: "", message: "" });
    try {
      const data = await updateProject(updatedProj._id, updatedProj);
      if (data._id) {
        setProjects((prev) =>
          prev.map((p) => (p._id === updatedProj._id ? updatedProj : p))
        );
        setAlert({
          show: true,
          type: "success",
          message: "✅ Project updated successfully!",
        });
      } else {
        console.log("Failed to update project", data.message);
      }
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        message: "⚠️ Something went wrong. Please try again.",
      });
      console.error("Error updating project:", err);
    } finally {
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 3000);
    }
  };

  const handleDeleteProject = async (id) => {
    setAlert({ show: false, type: "", message: "" });
    try {
      const data = await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p._id !== id));
      setAlert({
        show: true,
        type: "success",
        message: "✅ Project deleted successfully!",
      });
    } catch (err) {
      setAlert({
        show: true,
        type: "error",
        message: "⚠️ Something went wrong. Please try again.",
      });
      console.error("Error deleting project:", err);
    } finally {
      setTimeout(() => {
        setAlert({ show: false, type: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1f2f] text-gray-100 p-6">
      {alert.show && <Alert alert={alert} />}
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
            key={project._id}
            project={project}
            onEdit={(proj) => {
              setEditProject(proj);
              setIsModalOpen(true);
            }}
            onDelete={() => handleDeleteProject(project._id)}
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
