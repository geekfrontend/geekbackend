import {
  Project,
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../models/projectModel";

export const fetchProjects = (): Project[] => {
  return getAllProjects();
};

export const fetchProject = (id: number): Project | undefined => {
  return getProjectById(id);
};

export const addProject = (
  title: string,
  description: string,
  tags: string[],
  imageUrl: string
): Project => {
  return createProject(title, description, tags, imageUrl);
};

export const modifyProject = (
  id: number,
  title: string,
  description: string,
  tags: string[],
  imageUrl: string
): Project | undefined => {
  return updateProject(id, title, description, tags, imageUrl);
};

export const removeProject = (id: number): boolean => {
  return deleteProject(id);
};
