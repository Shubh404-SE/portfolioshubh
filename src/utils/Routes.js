import API from "./AxiosInstance.js";

// Fetch all projects
export const getAllProjects = async () => {
  const { data } = await API.get("/projects");
  return data;
};

// Add new project
export const addProject = async (project) => {
  const { data } = await API.post("/projects", project);
  return data;
};

// Update project
export const updateProject = async (id, updatedData) => {
  const { data } = await API.put(`/projects/${id}`, updatedData);
  return data;
};

// Delete project
export const deleteProject = async (id) => {
  const { data } = await API.delete(`/projects/${id}`);
  return data;
};
