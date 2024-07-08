import { Request, Response } from "express";
import * as projectService from "../services/projectService";

export const getProjects = (req: Request, res: Response): void => {
  try {
    const projects = projectService.fetchProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

export const getProject = (req: Request, res: Response): void => {
  const { id } = req.params;
  try {
    const project = projectService.fetchProject(Number(id));
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project" });
  }
};

export const createProject = (req: Request, res: Response): void => {
  const { title, description, tags, imageUrl } = req.body;
  try {
    const newProject = projectService.addProject(
      title,
      description,
      tags,
      imageUrl
    );
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: "Failed to create project" });
  }
};

export const updateProject = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { title, description, tags, imageUrl } = req.body;
  try {
    const updatedProject = projectService.modifyProject(
      Number(id),
      title,
      description,
      tags,
      imageUrl
    );
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update project" });
  }
};

export const deleteProject = (req: Request, res: Response): void => {
  const { id } = req.params;
  try {
    const isDeleted = projectService.removeProject(Number(id));
    if (isDeleted) {
      res.status(200).json({ message: "Project deleted successfully" });
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete project" });
  }
};
