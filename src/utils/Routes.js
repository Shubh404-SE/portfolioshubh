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

// Fetch all skills
export const getAllSkills = async () => {
  const { data } = await API.get("/skills");
  return data;
};

// Add new skill
export const addSkill = async (skill) => {
  const { data } = await API.post("/skills", skill);
  return data;
};

// Update skill
export const updateSkill = async (id, updatedData) => {
  const { data } = await API.put(`/skills/${id}`, updatedData);
  return data;
};

// Delete skill
export const deleteSkill = async (id) => {
  const { data } = await API.delete(`/skills/${id}`);
  return data;
};

// send message
export const sendMessage = async (message) => {
  const { data } = await API.post("/message/send", message);
  return data;
};

// fetch all messages
export const fetchMessages = async () => {
  const { data } = await API.get("/message");
  return data;
};

// delete message
export const deleteMessage = async (id) => {
  const { data } = await API.delete(`/message/${id}`);
  return data;
};
